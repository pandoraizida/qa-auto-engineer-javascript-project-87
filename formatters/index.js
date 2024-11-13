import getReportDefault from './formatDefault.js';
import getReportPlain from './formatPlain.js';
import getReportJson from './formatJson.js';

const isReportFormat = (obj1, obj2, format) => {
  switch (format) {
    case 'plain':
      return getReportPlain(obj1, obj2);
    case 'json':
      return getReportJson(obj1, obj2);
    default:
      return getReportDefault(obj1, obj2);
  }
};

export default isReportFormat;
