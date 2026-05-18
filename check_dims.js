const fs = require('fs');
const path = require('path');

function getPNGDimensions(filePath) {
    const buffer = fs.readFileSync(filePath);
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
}

console.log('max.png:', getPNGDimensions(path.join('public', 'max.png')));
console.log('tg.png:', getPNGDimensions(path.join('public', 'tg.png')));
