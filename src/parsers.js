import yaml from 'js-yaml';

const parceToObject = (fileExtension, fileData) => {
  switch (fileExtension) {
    case 'json':
      return JSON.parse(fileData);
    case 'yml':
      return yaml.load(fileData);
    case 'yaml':
      return yaml.load(fileData);
    default:
      throw new Error(`Unsupported file format: '${fileExtension}'`);
  }
};

export default parceToObject;
