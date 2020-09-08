const randomColor = require('randomcolor');

let color = randomColor();

const chalk = require('chalk');

const colors = require('colors');

let hueTest = process.argv[2];
let luminosityTest = process.argv[3];

let chalkColor = randomColor({
  hue: hueTest,
  luminosity: luminosityTest,
});

if (process.argv[2] === 'ask') {
  return (
    console.log('What is your preferred color?'),
    console.log('What luminosity?')
  );
} else {
  const makeBlockOfHashtag = () => {
    console.log(chalk.hex(chalkColor)('##############################')),
      console.log(chalk.hex(chalkColor)('##############################')),
      console.log(chalk.hex(chalkColor)('##############################')),
      console.log(chalk.hex(chalkColor)('##############################')),
      console.log(
        chalk.hex(chalkColor)(`#########   ${randomColor()}   ########`),
      );
    console.log(chalk.hex(chalkColor)('##############################')),
      console.log(chalk.hex(chalkColor)('##############################')),
      console.log(chalk.hex(chalkColor)('##############################')),
      console.log(chalk.hex(chalkColor)('##############################'));
  };
  makeBlockOfHashtag();
}
