install:
	npm ci

help:
	node bin/gendiff -h

gendiff:
	node ./bin/gendiff file1.yaml file2.yaml

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest -- --coverage --coverageProvider=v8
