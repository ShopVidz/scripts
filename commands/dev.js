const conf = new (require("conf"))();
const chalk = require("chalk");
const inquirer = require("inquirer");
const ui = new inquirer.ui.BottomBar();
const { spawn } = require("child_process");

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
        name: "reset",
        message: "Do you want to reset the shopify dev mode?",
        default: false,
      },
    ])
    .then((answers) => {
      console.log(answers);
      const { dev_url, reset } = answers;
      conf.set("dev_url", dev_url);
      conf.set("reset", reset);
      const command = `yarn shopify app dev --tunnel-url=${dev_url}:4000 ${
        reset ? "--reset" : ""
      }`;
      ui.log.write(chalk.greenBright(command));

      const cmd = spawn(command, {
        shell: true,
        stdio: "inherit",
      });

      cmd.on("close", (code) => {
        console.log(`child process exited with code ${code}`);
        process.exit();
      });
    });
}

module.exports = dev;
