const conf = new (require("conf"))();
const chalk = require("chalk");
const inquirer = require("inquirer");
const ui = new inquirer.ui.BottomBar();
async function dev() {
  conf.set("dev", true);
  console.log(chalk.greenBright("Dev mode enabled"));

  inquirer
    .prompt([
      {
        type: "list",
        name: "dev_url",
        message: "What is your tunnel URL?",
        choices: [
          "https://dev1.example.com",
          "https://dev2.example.com",
          "https://dev3.example.com",
        ],
      },
      {
        type: "confirm",
        name: "doNotReset",
        message: "Do you want to reset the shopify dev mode?",
        default: false,
      },
    ])
    .then((answers) => {
      console.log(answers);
      const { dev_url, doNotReset } = answers;
      conf.set("dev_url", dev_url);
      conf.set("doNotReset", doNotReset);
      ui.log.write(chalk.greenBright("Dev mode enabled"));
    });
}

module.exports = dev;
