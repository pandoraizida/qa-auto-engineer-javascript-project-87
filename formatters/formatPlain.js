const getReportPlain = (obj1, obj2) => {
  const report = [];

  Object.keys(obj1).forEach((etalonKey) => {
    if (!Object.hasOwn(obj2, etalonKey)) {
      report.push(`Property '${etalonKey}' was removed`);
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      report.push(`Property '${key}' added with value: ${obj2[key]}`);
      return;
    }
    if (obj1[key] !== obj2[key]) {
      report.push(`Property '${key}' was updated. From ${obj1[key]} to ${obj2[key]}`);
    }
  });
  return report.join('\n');
};

export default getReportPlain;