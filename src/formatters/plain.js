import createBasis from '../createBasis.js';

const getReportPlain = (obj1, obj2) => {
  const basis = createBasis(obj1, obj2);
  const report = basis.filter((e) => e.type !== 'unchanged').map((basisLine) => {
    switch (basisLine.type) {
      case 'added':
        return (`Property '${basisLine.key}' was added with value: ${basisLine.value}`);
      case 'removed':
        return (`Property '${basisLine.key}' was removed`);
      case 'updated':
        return (`Property '${basisLine.key}' was updated. From ${basisLine.valueOld} to ${basisLine.valueNew}`);
      default:
        throw new Error('unknown changing');
    }
  });

  return report.join('\n');
};

export default getReportPlain;
