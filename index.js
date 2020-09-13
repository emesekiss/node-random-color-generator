const randomColor = require('randomcolor');
const chalk = require('chalk');

// 1. Choosing randomcolor library to generate a random hex color and then using chalk library to color my '#' characters

let hue = process.argv[2];
let luminosity = process.argv[3];

let chalkColor = randomColor({
  hue,
  luminosity,
});

const makeBlockOfHashtag = () => {
  for (let i = 0; i < 9; i++) {
    if (i === 4) {
      console.log(
        chalk.hex(chalkColor)(`##########  ${chalkColor}  ##########`),
      );
    } else {
      console.log(chalk.hex(chalkColor)('###############################'));
    }
  }
};

makeBlockOfHashtag();
