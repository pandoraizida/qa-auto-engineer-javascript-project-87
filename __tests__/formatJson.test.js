import { expect, test } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getReportJson from '../formatters/formatJson.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('check diff between json files', () => {
  const expected = readFixtureFile('ifExpectedJson.txt').trim();
  expect(getReportJson('file1.json', 'file2.json')).toEqual(expected);
});

test('check diff between yaml files', () => {
  const expected = readFixtureFile('ifExpectedJson.txt').trim();
  expect(getReportJson('file1.yaml', 'file2.yaml')).toEqual(expected);
});

test('check diff between json and yaml files', () => {
  const expected = readFixtureFile('ifExpectedJson.txt').trim();
  expect(getReportJson('file1.yaml', 'file2.json')).toEqual(expected);
});

test('check diff if the second file is empty json', () => {
  const expected = readFixtureFile('isEmptySecondFileJson.txt').trim();
  expect(getReportJson('file1.yaml', 'empty.json')).toEqual(expected);
});

test('check diff if the first file is empty json', () => {
  const expected = readFixtureFile('ifEmptyFirstFileJson.txt').trim();
  expect(getReportJson('empty.json', 'file2.yaml')).toEqual(expected);
});

test('check diff if both files have the same content', () => {
  const expected = readFixtureFile('ifSameContentJson.txt').trim();
  expect(getReportJson('same.yml', 'file1.json')).toEqual(expected);
});
