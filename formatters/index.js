import getReportDefault from './formatDefault.js';
import getReportPlain from './formatPlain.js';

const genDiff = (file1, file2, format) => {
  let result;
  const formatName = format.format;
  if (formatName === 'plain') {
    result = getReportPlain(file1, file2, formatName);
  } else {
    result = getReportDefault(file1, file2);
  }
  // console.log(result);
  return result;
};

export default genDiff;
