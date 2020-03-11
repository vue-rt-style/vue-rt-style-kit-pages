let childProcess = require('child_process')
let ls = childProcess.spawn(`create-symlinks.${process.platform === 'win32' ? 'bat' : 'sh'}`)
ls.on('close', code => {
  console.log(code == 0 ? 'Success!' : 'Error')
})
