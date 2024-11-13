const getReportDefault = (obj1, obj2) => {
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
  return report.join('\n');
};

export default getReportDefault;
