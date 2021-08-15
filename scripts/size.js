const fs = require("fs");
const { join } = require("path");

// set the max size of the zip file
const MAX_BYTES = 13312;
const filename = "game.zip";

// some code to get the size of the zip file
const getFileSize = () => fs.statSync(join(__dirname, '..', 'zip', filename)).size;
const isToBig = (size) => size > MAX_BYTES;

// get size of the zip file
var fileSize = getFileSize(filename);
var fileDiff = Math.abs(MAX_BYTES - fileSize);

// report back
if (!isToBig(fileSize)) {
  console.log(`\n== SUCCESS ==\nOkay, everything looks fine.\nThe zip file is using ${fileSize} / ${MAX_BYTES} bytes (${-fileDiff} bytes).`);
  process.exit(0);
} else {
  console.log(`\n== FAILED ==\nThis is a problem.\nThe zip file is using ${fileSize} / ${MAX_BYTES} bytes (${-fileDiff} bytes).`);
  process.exit(1);
}