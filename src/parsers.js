import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { cwd } from 'node:process';

const getFileExtension = (filename) => {
  const extension = path.extname(filename);
  return extension;
};

const parceToObject = (file) => {
  const format = getFileExtension(file);
  console.log(`Current directory: ${cwd()}`);
  const filepath = file;
  // const filepath = path.resolve(`${cwd()}`, '__fixtures__', file);
  if (format === '.json') {
    try {
      // return JSON.parse(readFile(file));
      return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
    } catch (e) {
      throw new Error('Invalid JSON');
    }
  } if (format === '.yaml' || format === '.yml') {
    try {
      // return yaml.load(readFile(file));
      return yaml.load(fs.readFileSync(filepath, 'utf-8'));
    } catch (e) {
      console.log(e);
      console.log(file);
      throw new Error('Invalid YAML');
    }
  }
  throw new Error('Unsupported file format');
};

export default parceToObject;
