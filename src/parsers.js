import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getFileExtension = (filename) => {
  const extension = path.extname(filename);
  return extension;
};

const parceToObject = (file) => {
  const format = getFileExtension(file);
  if (format === '.json') {
    try {
      return JSON.parse(fs.readFileSync(file, 'utf-8'));
    } catch (e) {
      throw new Error('Invalid JSON');
    }
  } if (format === '.yaml' || format === '.yml') {
    try {
      return yaml.load(fs.readFileSync(file, 'utf-8'));
    } catch (e) {
      throw new Error('Invalid YAML');
    }
  }
  throw new Error('Unsupported file format');
};

export default parceToObject;
