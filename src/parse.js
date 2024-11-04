#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import process from 'process';

const getFileContent = (file) => {
    const cwd = process.cwd();
    const fileContent = fs.readFileSync(path.resolve(cwd, 'files', file), 'utf-8');
    return fileContent;
  };
  
  const genDiff = (file1, file2) => {
    const obj1 = JSON.parse(getFileContent(file1));
    const obj2 = JSON.parse(getFileContent(file2));
    let report = []
    report.push('{');
    for (const etalonKey in obj1) {
        if (!obj2.hasOwnProperty(etalonKey)) {
            report.push(`- ${etalonKey}: ${obj1[etalonKey]}`)
        }
    }
    
        for (const key in obj2) {
            if (!obj1.hasOwnProperty(key)) {
                report.push(`+ ${key}: ${obj2[key]}`)
                continue;
            }
            if (obj1[key] !== obj2[key]) {
                report.push(`- ${key}: ${obj1[key]}`)
                report.push(`+ ${key}: ${obj2[key]}`)
                continue;      
            }
            report.push(`  ${key}: ${obj2[key]}`)
        }
        report.push('}');
        const result = report.join('\n');
        console.log(result);
        return result;
}

// const a = genDiff('file1.json', 'file2.json');
// console.log(a);

export default genDiff;