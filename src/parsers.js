import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFilePath = (filename) => path.join(__dirname, '..', 'files', filename);
const readFile = (filename) => fs.readFileSync(getFilePath(filename), 'utf-8');

const getFileExtension = (filename) => {
  const extension = path.extname(filename);
  // console.log(`file extension - ${extension}`);
  return extension;
};

const parceToObject = (file) => {
  const format = getFileExtension(file);
  if (format === '.json') {
    try {
      return JSON.parse(readFile(file));
    } catch (e) {
      throw new Error('Invalid JSON');
    }
  } if (format === '.yaml' || format === '.yml') {
    try {
      return yaml.load(readFile(file));
    } catch (e) {
      throw new Error('Invalid YAML');
    }
  }
  throw new Error('Unsupported file format');
};

export default parceToObject;
