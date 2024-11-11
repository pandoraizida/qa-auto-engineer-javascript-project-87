import { expect, test } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getReportPlain from '../formatters/formatPlain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('check diff between json files', () => {
  const expected = readFixtureFile('ifExpectedPlain.txt').trim();
  expect(getReportPlain('file1.json', 'file2.json', 'plain')).toEqual(expected);
});

test('check diff between yaml files', () => {
  const expected = readFixtureFile('ifExpectedPlain.txt').trim();
  expect(getReportPlain('file1.yaml', 'file2.yaml', 'plain')).toEqual(expected);
});

test('check diff between json and yaml files', () => {
  const expected = readFixtureFile('ifExpectedPlain.txt').trim();
  expect(getReportPlain('file1.yaml', 'file2.json', 'plain')).toEqual(expected);
});

test('check diff if the second file is empty json', () => {
  const expected = readFixtureFile('ifEmptySecondFilePlain.txt').trim();
  const result = getReportPlain('file1.yaml', 'empty.json', 'plain');
  expect(result).toEqual(expected);
});

test('check diff if the first file is empty json', () => {
  const expected = readFixtureFile('ifEmptyFirstFilePlain.txt').trim();
  const result = getReportPlain('empty.json', 'file2.yaml', 'plain');
  expect(result).toEqual(expected);
});

test('check diff if both files have the same content', () => {
  const expected = '';
  const result = getReportPlain('same.yml', 'file1.json', 'plain');
  expect(result).toEqual(expected);
});
