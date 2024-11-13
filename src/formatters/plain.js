import createBasis from '../createBasis.js';

const getReportPlain = (obj1, obj2) => {
  const basis = createBasis(obj1, obj2);
  const report = [];
  basis.forEach((basisLine) => {
    switch (basisLine.type) {
      case 'added':
        report.push(`Property '${basisLine.key}' was added with value: ${basisLine.value}`);
        break;
      case 'removed':
        report.push(`Property '${basisLine.key}' was removed`);
        break;
      case 'updated':
        report.push(`Property '${basisLine.key}' was updated. From ${basisLine.valueOld} to ${basisLine.valueNew}`);
        break;
      case 'unchanged':
        break;
      default:
        throw new Error('unknown changing');
    }
  });

  return report.join('\n');
};

export default getReportPlain;
