import { describe, expect, it } from "vitest";
import { withServer } from "../helpers/server";

describe("GET /api/health", () => {
  const baseUrl = withServer(3311);

  it("returns ok with a live db connection", async () => {
    const res = await fetch(`${baseUrl}/api/health`);
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body).toEqual({ status: "ok", db: "connected" });
  });
});

describe("GET /api/health when the database is unreachable", () => {
  const baseUrl = withServer(3312, {
    ...process.env,
    MONGODB_URI: "mongodb://localhost:1/nonexistent",
  });

  it(
    "returns a clear failure response",
    async () => {
      const res = await fetch(`${baseUrl}/api/health`);
      const body = await res.json();

      expect(res.status).toBe(503);
      expect(body).toEqual({ status: "error", db: "unreachable" });
    },
    10000,
  );
});
