import { spawn, type ChildProcess } from "node:child_process";
import { afterAll, beforeAll } from "vitest";

export async function startServer(
  port: number,
  env: NodeJS.ProcessEnv = process.env,
): Promise<ChildProcess> {
  const server = spawn("npx", ["next", "dev", "-p", String(port)], {
    cwd: process.cwd(),
    stdio: "pipe",
    env,
  });

  const baseUrl = `http://localhost:${port}`;
  const start = Date.now();
  const timeoutMs = 40000;

  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(baseUrl);
      if (res.status < 500) return server;
    } catch {
      // server not accepting connections yet
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  server.kill();
  throw new Error(`Server on port ${port} did not start within ${timeoutMs}ms`);
}

export function stopServer(server: ChildProcess): void {
  server.kill();
}

/** Starts a server for the lifetime of the enclosing describe block and returns its base URL. */
export function withServer(port: number, env?: NodeJS.ProcessEnv): string {
  let server: ChildProcess;

  beforeAll(async () => {
    server = await startServer(port, env);
  }, 45000);

  afterAll(() => {
    stopServer(server);
  });

  return `http://localhost:${port}`;
}
