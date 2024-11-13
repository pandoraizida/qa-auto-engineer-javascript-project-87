setup:
	npm ci

help:
	node ./bin/gendiff -h

gendiff1:
	node ./bin/gendiff file1.yaml file2.yaml

gendiff2:
	node ./bin/gendiff --format plain file1.yaml file2.yaml

gendiff3:
	node ./bin/gendiff --format json file1.yaml file2.yaml

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
