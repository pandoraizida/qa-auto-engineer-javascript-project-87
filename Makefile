install:
	npm ci

help:
	node bin/gendiff -h

gendiff:
	node ./bin/gendiff 'file1.json' 'file2.json'

publish:
	npm publish --dry-run
