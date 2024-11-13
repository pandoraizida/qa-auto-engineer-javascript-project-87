import createBasis from '../createBasis.js';

const getReportJson = (obj1, obj2) => {
  const basis = createBasis(obj1, obj2);

  const report = basis.reduce((acc, basisLine) => {
    switch (basisLine.type) {
      case 'added':
        return { ...acc, [basisLine.key]: `added with value: <${basisLine.value}>` };
      case 'removed':
        return { ...acc, [basisLine.key]: 'was removed' };
      case 'updated':
        return { ...acc, [basisLine.key]: `was updated from <${basisLine.valueOld}> to <${basisLine.valueNew}>` };
      case 'unchanged':
        return { ...acc, [basisLine.key]: 'was unchanged' };
      default:
        throw new Error('unknown changing');
    }
  }, {});

  return JSON.stringify(report);
};

export default getReportJson;
