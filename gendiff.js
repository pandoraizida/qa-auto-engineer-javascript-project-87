#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .version('1.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')

program.parse(process.argv);
