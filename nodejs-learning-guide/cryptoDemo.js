const crypto = require('crypto'),
  fs = require('fs'),
  content = fs.readFileSync('./test.txt', {encoding: 'utf-8'}),
  hash = crypto.createHash('sha256')

hash.update(content)
let output = hash.digest('hex')
console.log('>>>', output);
