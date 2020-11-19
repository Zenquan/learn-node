const fs = require('fs'),
  zlib = require('zlib'),
  zlibZip = zlib.createGzip(),
  zlibGunzip = zlib.createGunzip()

// let readFile1 = fs.createReadStream('./fileForCompress.txt'),
//   out1 = fs.createWriteStream('./fileForCompress.txt.gz')

// readFile1.pipe(zlibZip).pipe(out1)


let readFile2 = fs.createReadStream('./fileForCompress.txt.gz'),
  out2 = fs.createWriteStream('./fileForCompress2.txt')

readFile2.pipe(zlibGunzip).pipe(out2)