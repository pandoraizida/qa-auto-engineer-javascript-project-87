import createBasis from '../createBasis.js';

const getReportJson = (obj1, obj2) => {
  const basis = createBasis(obj1, obj2);
  const report = {};
  basis.forEach((basisLine) => {
    switch (basisLine.type) {
      case 'added':
        report[basisLine.key] = `added with value: <${basisLine.value}>`;
        break;
      case 'removed':
        report[basisLine.key] = 'was removed';
        break;
      case 'updated':
        report[basisLine.key] = `was updated from <${basisLine.valueOld}> to <${basisLine.valueNew}>`;
        break;
      case 'unchanged':
        report[basisLine.key] = 'was unchanged';
        break;
      default:
        throw new Error('unknown changing');
    }
  });
  return JSON.stringify(report);
};

export default getReportJson;
