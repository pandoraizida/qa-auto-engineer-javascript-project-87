#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../formatters/index.js';

program
  .version('1.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action(genDiff);

program.parse(process.argv);
