const getReportJson = (obj1, obj2) => {
  const report = {};

  Object.keys(obj1).forEach((etalonKey) => {
    if (!Object.hasOwn(obj2, etalonKey)) {
      report[`${etalonKey}`] = 'was removed';
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      report[`${key}`] = `added with value: <${obj2[key]}>`;
      return;
    }
    if (obj1[key] !== obj2[key]) {
      report[`${key}`] = `was updated from ${obj1[key]} to ${obj2[key]}`;
      return;
    }
    report[`${key}`] = 'was unchanged';
  });

  return JSON.stringify(report);
};

export default getReportJson;
