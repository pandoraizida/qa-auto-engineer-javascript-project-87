import { expect, test } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/makeDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('check diff between json files', () => {
  const expected = readFixtureFile('ifExpected.txt').trim();
  expect(genDiff('file1.json', 'file2.json')).toEqual(expected);
});

test('check diff between yaml files', () => {
  const expected = readFixtureFile('ifExpected.txt').trim();
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(expected);
});

test('check diff between json and yaml files', () => {
  const expected = readFixtureFile('ifExpected.txt').trim();
  expect(genDiff('file1.yaml', 'file2.json')).toEqual(expected);
});

test('check diff if the second file is empty json', () => {
  const expected = readFixtureFile('ifEmptySecondFile.txt').trim();
  const result = genDiff('file1.yaml', 'empty.json');
  expect(result).toEqual(expected);
  expect(result).not.toContain('timeout: 20');
  expect(result).not.toContain('verbose: true');
});

test('check diff if the first file is empty json', () => {
  const expected = readFixtureFile('ifEmptyFirstFile.txt').trim();
  const result = genDiff('empty.json', 'file2.yaml');
  expect(result).toEqual(expected);
  expect(result).not.toContain('follow: false');
  expect(result).not.toContain('timeout: 50');
  expect(result).not.toContain('proxy: 123.234.53.22');
});

test('check diff if both files have the same content', () => {
  const expected = readFixtureFile('ifSameContent.txt');
  const result = genDiff('same.yml', 'file1.json');
  expect(result).toEqual(expected);
  expect(result).not.toContain('+');
  expect(result).not.toContain('-');
});

test('check that result of diff is string', () => {
  const result = genDiff('file1.json', 'file2.json');
  expect(typeof (result)).toEqual('string');
});
