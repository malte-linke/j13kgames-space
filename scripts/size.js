const fs = require("fs");
const { join } = require("path");
require('colors');

// set the max size of the zip file
const MAX_BYTES = 13312;
const filename = "game.zip";

// some code to get the size of the zip file
const getFileSize = () => fs.statSync(join(__dirname, '..', 'zip', filename)).size;
const isTooBig = (size) => size > MAX_BYTES;

// get size of the zip file
var fileSize = getFileSize(filename);
var fileDiff = Math.abs(MAX_BYTES - fileSize);

// report back
let result = !isTooBig(fileSize);
console.clear();
console.log(
  `\n` +
  `Result: ` + (result ? `Success`.green : `Failed`.red) + `\n` +
  `The zip file is using ${fileSize} / ${MAX_BYTES} bytes (${(result ? '' : '+') + -fileDiff} bytes).\n` +
  `\n` +
  `Output: ${join(__dirname, '..', 'zip', filename)}\n`
);