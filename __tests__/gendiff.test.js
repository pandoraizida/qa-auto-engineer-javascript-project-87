import { expect, test } from '@jest/globals';
import genDiff from '../src/gendiff.js';
import { readFile } from '../src/parsers.js';

test('if format equal plain', () => {
  const expected = readFile('ifExpectedPlain.txt').trim();
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(expected);
});

test('if format equal json', () => {
  const expected = readFile('ifExpectedJson.txt').trim();
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(expected);
});

test('if format is default', () => {
  const expected = readFile('ifExpected.txt').trim();
  expect(genDiff('file1.json', 'file2.json', 'default')).toEqual(expected);
});

test('if format is not equal plain or json', () => {
  const expected = readFile('ifExpected.txt').trim();
  expect(genDiff('file1.json', 'file2.json', 'kokoko')).toEqual(expected);
});

test('if format is missed', () => {
  const expected = readFile('ifExpected.txt').trim();
  const a = genDiff('file1.json', 'file2.json');
  expect(a).toEqual(expected);
});
