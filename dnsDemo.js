const dns = require('dns'),
  option = {all: true}

dns.lookup('zhihu.joyenjoy.tech', option, (err, address, family) => {
  if(err) throw err

  console.log('1>>>', address);
})

dns.resolve4('zhihu.joyenjoy.tech', option, (err, address, family) => {
  if(err) throw err

  console.log('1>>>', address);
})