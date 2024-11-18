import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['json', 'plain', 'ifExpectedPlain.txt'],
  ['json', 'json', 'ifExpectedJson.txt'],
  ['json', 'stylish', 'ifExpected.txt'],
  ['yaml', 'plain', 'ifExpectedPlain.txt'],
  ['yaml', 'json', 'ifExpectedJson.txt'],
  ['yaml', 'stylish', 'ifExpected.txt'],
  ['yaml', 'kokoko', 'ifExpected.txt'],
])('check comparison report for %s file with format %s', (fileExtension, format, expected) => {
  const filePath1 = getFixturePath(`file1.${fileExtension}`);
  const filePath2 = getFixturePath(`file2.${fileExtension}`);
  expect(genDiff(filePath1, filePath2, format)).toEqual(readFixtureFile(expected));
});

test('check comparison report when format is missed', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file3.yml');
  expect(genDiff(filePath1, filePath2)).toEqual(readFixtureFile('ifExpected.txt'));
});
