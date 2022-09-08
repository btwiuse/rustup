#!/usr/bin/env node

var child_process = require("child_process");

child_process.spawnSync("bash", [
  "-c",
  "curl -sSf https://sh.rustup.rs | sh",
], { stdio: "inherit" });
