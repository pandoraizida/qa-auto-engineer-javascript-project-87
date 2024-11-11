import { expect, test } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('if format equal plain', () => {
  const expected = readFixtureFile('ifExpectedPlain.txt').trim();
  expect(genDiff('file1.json', 'file2.json', { format: 'plain' })).toEqual(expected);
});

test('if format is not equal plain', () => {
  const expected = readFixtureFile('ifExpected.txt').trim();
  expect(genDiff('file1.json', 'file2.json', { format: 'kokoko' })).toEqual(expected);
});

test('if format is missed', () => {
  const expected = readFixtureFile('ifExpected.txt').trim();
  expect(genDiff('file1.json', 'file2.json', { format: null })).toEqual(expected);
});
