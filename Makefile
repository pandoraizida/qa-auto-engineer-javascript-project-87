setup:
	npm ci

help:
	node ./bin/gendiff -h

gendiff1:
	node ./bin/gendiff __fixtures__/file1.json __fixtures__/file2.yaml

gendiff2:
	node ./bin/gendiff --format plain __fixtures__/file1.json __fixtures__/file2.yaml

gendiff3:
	node ./bin/gendiff --format json __fixtures__/file1.json __fixtures__/file2.yaml

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
