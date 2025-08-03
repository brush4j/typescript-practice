
import { fn1 } from './mock';
fn1();
import * as fs from 'fs';
import * as path from 'path';


const myMapTs = new Map<string, number>([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const [key, value] of myMapTs) {
    console.log(`Key: ${key}, Value: ${value}`);
}

