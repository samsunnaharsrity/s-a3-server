import dotenv from "dotenv";
import serverless from "serverless-http";
import { connectDB } from "./config/mongodb";
import app from "./app";

dotenv.config();

let connected = false;

const handler = serverless(app);

export default async function (req: any, res: any) {
  if (!connected) {
    await connectDB();
    connected = true;
  }

  return handler(req, res);
}