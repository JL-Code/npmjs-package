#!/bin/bash
npm run build
git add .
git commit -m 'chore: build'
npm run release && git push --follow-tags origin master && npm publish
