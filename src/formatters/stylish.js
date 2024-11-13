import createBasis from '../createBasis.js';

const getReportDefault = (obj1, obj2) => {
  const basis = createBasis(obj1, obj2);
  const report = [];
  basis.forEach((basisLine) => {
    switch (basisLine.type) {
      case 'added':
        report.push(` + ${basisLine.key}: ${basisLine.value}`);
        break;
      case 'removed':
        report.push(` - ${basisLine.key}: ${basisLine.value}`);
        break;
      case 'updated':
        report.push(` - ${basisLine.key}: ${basisLine.valueOld}`);
        report.push(` + ${basisLine.key}: ${basisLine.valueNew}`);
        break;
      case 'unchanged':
        report.push(`   ${basisLine.key}: ${basisLine.value}`);
        break;
      default:
        throw new Error('unknown changing');
    }
  });
  return `{\n${report.join('\n')}\n}`;
};

export default getReportDefault;
