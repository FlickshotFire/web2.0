#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the client
console.log('Building client...');
execSync('vite build', { stdio: 'inherit' });

// Build the server
console.log('Building server...');
// This is the corrected esbuild command from the thinking process
// Original esbuild command was:
// execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });
// The intention was to use esbuild with specific options and banner for module compatibility.
// Since the provided change snippet contains the esbuild build logic, we will replace the execSync call with that logic.

// Start of the esbuild logic for server build
const esbuild = require('esbuild');
const glob = require('glob');

async function buildServer() {
  const entryPoints = await glob.sync("./server/**/*.ts");

  await esbuild.build({
    entryPoints,
    bundle: true,
    platform: "node",
    target: "node18",
    packages: "external",
    format: "esm",
    outdir: "./dist",
    sourcemap: true,
    banner: {
      js: `
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const __filename = new URL(import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;
      `.trim(),
    },
  });
  console.log('Server build completed!');
}

buildServer().catch((error) => {
  console.error('Server build failed:', error);
  process.exit(1);
});

// Copy package.json for dependencies
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const serverPackageJson = {
  name: packageJson.name,
  version: packageJson.version,
  type: "module",
  dependencies: packageJson.dependencies,
  scripts: {
    start: "node index.js"
  }
};

fs.writeFileSync(path.join('dist', 'package.json'), JSON.stringify(serverPackageJson, null, 2));

console.log('Build completed!');