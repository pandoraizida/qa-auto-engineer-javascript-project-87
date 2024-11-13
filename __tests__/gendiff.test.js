import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('if format equal plain', () => {
  const expected = readFixtureFile('ifExpectedPlain.txt').trim();
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain')).toEqual(expected);
});

test('if format equal json', () => {
  const expected = readFixtureFile('ifExpectedJson.txt').trim();
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json')).toEqual(expected);
});

test('if format is default', () => {
  const expected = readFixtureFile('ifExpected.txt').trim();
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'stylish')).toEqual(expected);
});

test('if format is not equal plain or json', () => {
  const expected = readFixtureFile('ifExpected.txt').trim();
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'kokoko')).toEqual(expected);
});

test('if format is missed', () => {
  const expected = readFixtureFile('ifExpected.txt').trim();
  const a = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');
  expect(a).toEqual(expected);
});
