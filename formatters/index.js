import getReportDefault from './formatDefault.js';
import getReportPlain from './formatPlain.js';
import getReportJson from './formatJson.js';

const genDiff = (file1, file2, format) => {
  const formatName = format.format;
  if (formatName === 'plain') {
    return getReportPlain(file1, file2, formatName);
  }
  if (formatName === 'json') {
    return getReportJson(file1, file2, formatName);
  }
  return getReportDefault(file1, file2);
};

export default genDiff;
