import { config as EnvConfig } from "dotenv";
EnvConfig();
export const config = {
  accessKeyId: process.env.accessKeyId,
  accessKeySecret: process.env.accessKeySecret,
};
