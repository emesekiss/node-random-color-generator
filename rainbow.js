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
