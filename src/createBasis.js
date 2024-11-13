import _ from 'lodash';

const createBasis = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  const result = [];

  sortedKeys.forEach((etalonKey) => {
    const has1 = Object.hasOwn(obj1, etalonKey);
    const has2 = Object.hasOwn(obj2, etalonKey);

    if (has1 && !has2) {
      result.push({ type: 'removed', key: etalonKey, value: obj1[etalonKey] });
    } else if (!has1 && has2) {
      result.push({ type: 'added', key: etalonKey, value: obj2[etalonKey] });
    } else if (has1 && has2 && (obj1[etalonKey] !== obj2[etalonKey])) {
      result.push({
        type: 'updated', key: etalonKey, valueOld: obj1[etalonKey], valueNew: obj2[etalonKey],
      });
    } else {
      result.push({ type: 'unchanged', key: etalonKey, value: obj2[etalonKey] });
    }
  });

  return result;
};

export default createBasis;
