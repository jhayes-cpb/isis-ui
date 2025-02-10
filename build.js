#!/usr/bin/env node

const { exec } = require('child_process');

// Get the directory name from the command-line arguments
const dir = process.argv[2];

if (!dir) {
  console.error('Usage: node build.js <exampleDirectory>');
  process.exit(1);
}

const input = `./${dir}/input.css`;
const output = `./${dir}/dist.css`;
const command = `npx @tailwindcss/cli -i ${input} -o ${output}`;

console.log(`Running command: ${command}`);

// Execute the Tailwind CLI command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
  }
  console.log(stdout);
});
