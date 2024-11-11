install:
	npm ci

help:
	node bin/gendiff -h

gendiff1:
	node ./bin/gendiff --format plain file1.yaml file2.yaml

gendiff2:
	node ./bin/gendiff file1.yaml file2.yaml

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage
