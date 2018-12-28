const isAliEnv = require('./index');

console.log('start');
const start = new Date();
isAliEnv().then(function(res) {
  console.log(`is ali env: ${res}`);
  console.log(`end in ${new Date() - start}`);
});
