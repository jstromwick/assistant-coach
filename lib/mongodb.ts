import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function connect(): Promise<MongoClient> {
  const template = process.env.MONGO_CONNECTION_STRING;
  const password = process.env.MONGO_PASSWORD;
  if (!template || !password) {
    throw new Error(
      "Missing MONGO_CONNECTION_STRING or MONGO_PASSWORD environment variable",
    );
  }
  const uri = template.replace(
    "<db_password>",
    encodeURIComponent(password),
  );
  return new MongoClient(uri, { serverSelectionTimeoutMS: 5000 }).connect();
}

export function getMongoClientPromise(): Promise<MongoClient> {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = connect().catch((error: unknown) => {
      global._mongoClientPromise = undefined;
      throw error;
    });
  }
  return global._mongoClientPromise;
}
