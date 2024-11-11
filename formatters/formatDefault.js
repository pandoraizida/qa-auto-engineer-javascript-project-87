import parceToObject from '../src/parsers.js';

const getReportDefault = (file1, file2) => {
  const obj1 = parceToObject(file1);
  const obj2 = parceToObject(file2);
  const report = [];
  report.push('{');

  Object.keys(obj1).forEach((etalonKey) => {
    if (!Object.hasOwn(obj2, etalonKey)) {
      report.push(`- ${etalonKey}: ${obj1[etalonKey]}`);
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      report.push(`+ ${key}: ${obj2[key]}`);
      return;
    }
    if (obj1[key] !== obj2[key]) {
      report.push(`- ${key}: ${obj1[key]}`);
      report.push(`+ ${key}: ${obj2[key]}`);
      return;
    }
    report.push(`  ${key}: ${obj2[key]}`);
  });

  report.push('}');
  const result = report.join('\n');
  // console.log(result);
  return result;
};

export default getReportDefault;
