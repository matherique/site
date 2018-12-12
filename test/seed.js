import fs from 'fs';
import path from 'path';

const dir = path.join(__dirname, '../test');

export default JSON.parse(fs.readFileSync(`${dir}/data.json`,'utf8'));
