const fs = require('fs');
const { join } = require('path');

// set up the paths
const distDir = join(__dirname, '..', 'dist');

// create dist directory if it doesn't exist
fs.mkdirSync(distDir, { recursive: true });

// get all files and remove them
const files = fs.readdirSync(distDir);
for (const file of files) {
  fs.unlinkSync(join(distDir, file));
}