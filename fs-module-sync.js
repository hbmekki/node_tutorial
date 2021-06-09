const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/text.txt', 'utf8');

console.log(first);
writeFileSync('./content/new.txt', `This the new file ${first}`, {flag:'a'});