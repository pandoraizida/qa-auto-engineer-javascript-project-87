import createBasis from '../createBasis.js';

const getReportDefault = (obj1, obj2) => {
  const basis = createBasis(obj1, obj2);
  const report = basis.map((basisLine) => {
    switch (basisLine.type) {
      case 'added':
        return (`  + ${basisLine.key}: ${basisLine.value}`);
      case 'removed':
        return (`  - ${basisLine.key}: ${basisLine.value}`);
      case 'updated':
        return (`  - ${basisLine.key}: ${basisLine.valueOld}\n  + ${basisLine.key}: ${basisLine.valueNew}`);
      case 'unchanged':
        return (`    ${basisLine.key}: ${basisLine.value}`);
      default:
        throw new Error('unknown changing');
    }
  });
  return `{\n${report.join('\n')}\n}`;
};

export default getReportDefault;
