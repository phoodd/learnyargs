const yargs = require('yargs');

const argv = yargs
  .option('value1', {
    describe: 'First value',
    demandOption: true,
    type: 'number',
  })
  .option('value2', {
    describe: 'Second value',
    demandOption: true,
    type: 'number',
  })
  .option('sign', {
    describe: 'Mathematical operation sign',
    demandOption: true,
    choices: ['+', '-', '*', '/'],
  })
  .help()
  .argv;

const calculate = (value1, value2, sign) => {
  switch (sign) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 'Invalid mathematical sign';
  }
};

console.log(`${argv.value1} ${argv.sign} ${argv.value2} = ${calculate(argv.value1, argv.value2, argv.sign)}`);
