import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import getReportPlain from '../src/formatters/plain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

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
  const expected = readFixtureFile('ifExpectedPlain.txt').trim();
  expect(getReportPlain(obj1, obj2)).toEqual(expected);
});

test('check that result of diff is string', () => {
  expect(typeof (getReportPlain(obj1, obj2))).toEqual('string');
});
