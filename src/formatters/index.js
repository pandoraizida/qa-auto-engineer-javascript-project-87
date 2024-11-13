import getReportDefault from './stylish.js';
import getReportPlain from './plain.js';
import getReportJson from './json.js';

const getReportByFormat = (obj1, obj2, format) => {
  switch (format) {
    case 'plain':
      return getReportPlain(obj1, obj2);
    case 'json':
      return getReportJson(obj1, obj2);
    default:
      return getReportDefault(obj1, obj2);
  }
};

export default getReportByFormat;
