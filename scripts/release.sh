#!/bin/bash
npm run build && npm run release && git push --follow-tags origin master && npm publish
