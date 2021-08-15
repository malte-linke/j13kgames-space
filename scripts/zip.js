const archiver = require('archiver');
const { join } = require('path');
const { mkdirSync, createWriteStream } = require('fs');

// set directory paths
const distDir = join(__dirname, '..', 'dist');
const zipDir = join(__dirname, '..', 'zip');

// create zip directory if neccessary
mkdirSync(zipDir, { recursive: true });

// start creating zip file
const stream = createWriteStream(join(zipDir, 'game.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

// write into zip file
archive.pipe(stream);
archive.directory(distDir, false);

// finalize
archive.finalize()
  .then(() => console.log(`Successfully created zip file in ${zipDir}`))
  .catch(() => console.log('Failed to create zip file'));