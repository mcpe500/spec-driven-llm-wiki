#!/usr/bin/env node
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");

spawn("npx", ["serve", "graph", "-p", "8080"], {
  cwd: repoRoot,
  stdio: "inherit"
});