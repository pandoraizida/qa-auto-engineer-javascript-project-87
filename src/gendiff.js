#!/usr/bin/env node
import parceToObject from './parsers.js';
import isReportFormat from '../formatters/index.js';

const genDiff = (file1, file2, format = 'default') => {
  const obj1 = parceToObject(file1);
  const obj2 = parceToObject(file2);
  const diff = isReportFormat(obj1, obj2, format);
  return diff;
};

export default genDiff;
