#! /usr/bin/env node
const { program } = require("commander");
const dev = require("./commands/dev");

program.command("dev").description("Enable dev mode").action(dev);

program.parse();
