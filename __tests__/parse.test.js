import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/parse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('match file', () => {
  const expected = readFixtureFile('parse.txt').trim();
  expect(genDiff('file1.json', 'file2.json')).toEqual(expected);
});

test('result is string', () => {
  const result = genDiff('file1.json', 'file2.json');
  expect(typeof (result)).toEqual('string');
});
