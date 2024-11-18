#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import parceToObject from './parsers.js';
import getReportByFormat from './formatters/index.js';

const getData = (file) => {
  const fileExtension = path.extname(file).slice(1);
  const fileData = fs.readFileSync(file, 'utf-8');
  return parceToObject(fileExtension, fileData);
};

const genDiff = (file1, file2, reportFormat = 'stylish') => {
  const obj1 = getData(file1);
  const obj2 = getData(file2);
  const diff = getReportByFormat(obj1, obj2, reportFormat);
  return diff;
};

export default genDiff;
