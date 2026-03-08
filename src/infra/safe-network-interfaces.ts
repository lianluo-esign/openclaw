import os from "node:os";

export function safeNetworkInterfaces(): ReturnType<typeof os.networkInterfaces> {
  try {
    return os.networkInterfaces();
  } catch {
    return {};
  }
}
