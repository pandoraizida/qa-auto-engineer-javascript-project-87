import { expect, test } from '@jest/globals';
import parceToObject from '../src/parsers.js';

test('check object when json is correct', () => {
  const expected = {
    follow: false, host: 'hexlet.io', proxy: '123.234.53.22', timeout: 50,
  };
  expect(parceToObject('./__fixtures__/file1.json')).toEqual(expected);
});

test('check error when json is incorrect', () => {
  expect(() => parceToObject('./__fixtures__/incorrect.json')).toThrow('Invalid JSON');
});

test('check object when yaml is correct', () => {
  const expected = {
    follow: false, host: 'hexlet.io', proxy: '123.234.53.22', timeout: 50,
  };
  expect(parceToObject('./__fixtures__/file1.yaml')).toEqual(expected);
});

test('check object when yml is correct', () => {
  const expected = { host: 'hexlet.io' };
  expect(parceToObject('./__fixtures__/file3.yml')).toEqual(expected);
});

test('check error when yaml is incorrect', () => {
  expect(() => parceToObject('./__fixtures__/incorrect.yml')).toThrow('Invalid YAML');
});

test('check error when file has unsupported format', () => {
  expect(() => parceToObject('./__fixtures__/unsupported.txt')).toThrow('Unsupported file format');
});
