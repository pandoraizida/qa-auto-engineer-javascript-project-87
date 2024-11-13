#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/gendiff.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, format) => {
    console.log(genDiff(filepath1, filepath2, format.format));
  });

program.parse(process.argv);
