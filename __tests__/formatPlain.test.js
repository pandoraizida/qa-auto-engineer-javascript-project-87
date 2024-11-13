import { expect, test } from '@jest/globals';
import getReportPlain from '../formatters/formatPlain.js';
import { readFile } from '../src/parsers.js';

const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

test('check diff between json files', () => {
  const expected = readFile('ifExpectedPlain.txt').trim();
  expect(getReportPlain(obj1, obj2)).toEqual(expected);
});

test('check that result of diff is string', () => {
  expect(typeof (getReportPlain(obj1, obj2))).toEqual('string');
});
