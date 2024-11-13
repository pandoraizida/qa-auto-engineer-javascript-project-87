import _ from 'lodash';

const createBasis = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((etalonKey) => {
    const has1 = Object.hasOwn(obj1, etalonKey);
    const has2 = Object.hasOwn(obj2, etalonKey);

    if (has1 && !has2) {
      return { type: 'removed', key: etalonKey, value: obj1[etalonKey] };
    } if (!has1 && has2) {
      return { type: 'added', key: etalonKey, value: obj2[etalonKey] };
    } if (has1 && has2 && (obj1[etalonKey] !== obj2[etalonKey])) {
      return {
        type: 'updated', key: etalonKey, valueOld: obj1[etalonKey], valueNew: obj2[etalonKey],
      };
    }
    return { type: 'unchanged', key: etalonKey, value: obj2[etalonKey] };
  });
};

export default createBasis;
