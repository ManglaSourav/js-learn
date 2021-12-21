const { spawn } = require('child_process');

const child = spawn('ls', ['-a', '-l']);
console.log(child);
child.on('exit', code => {
  console.log(`Exit code is: ${code}`);
});
