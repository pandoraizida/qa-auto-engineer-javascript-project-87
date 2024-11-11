import parceToObject from '../src/parsers.js';

const getReportPlain = (file1, file2) => {
  const obj1 = parceToObject(file1);
  const obj2 = parceToObject(file2);
  const report = [];
  const result = [];
  Object.keys(obj1).forEach((etalonKey) => {
    if (!Object.hasOwn(obj2, etalonKey)) {
      report.push(`Property '${etalonKey}' was removed`);
    }
  });
  Object.keys(obj2).forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      result.push(`${key}: ${obj2[key]}`);
      report.push(`Property '${key}' added with value: ${obj2[key]}`);
      return;
    }
    if (obj1[key] !== obj2[key]) {
      result.push(`${key}: ${obj2[key]}`);
      report.push(`Property '${key}' was updated. From ${obj1[key]} to ${obj2[key]}`);
    }
  });
  // console.log(result);
  // console.log(report.join('\n'));
  return report.join('\n');
};

export default getReportPlain;
