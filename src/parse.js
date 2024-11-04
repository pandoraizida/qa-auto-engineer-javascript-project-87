#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFilePath = (filename) => path.join(__dirname, '..', 'files', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFilePath(filename), 'utf-8');;

const genDiff = (file1, file2) => {
  const obj1 = JSON.parse(readFixtureFile(file1));
  const obj2 = JSON.parse(readFixtureFile(file2));
  let report = []
  report.push('{');
  for (const etalonKey in obj1) {
    if (!obj2.hasOwnProperty(etalonKey)) {
        report.push(`- ${etalonKey}: ${obj1[etalonKey]}`)
    }
  }
    for (const key in obj2) {
      if (!obj1.hasOwnProperty(key)) {
        report.push(`+ ${key}: ${obj2[key]}`)
        continue;
        }
      if (obj1[key] !== obj2[key]) {
        report.push(`- ${key}: ${obj1[key]}`)
        report.push(`+ ${key}: ${obj2[key]}`)
        continue;      
    }
        report.push(`  ${key}: ${obj2[key]}`)
    }
        report.push('}');
        const result = report.join('\n');
        console.log(result);
        return result;
}

export default genDiff;