import { Package } from './types/Package';
import * as fs from 'fs';
import * as child_process from 'child_process';

function createPackage(filePath: string): Package {
    const data = fs.readFileSync(filePath, 'utf-8');
    const packageObj: Package = JSON.parse(data);
    // Run the sf command to create the package
    const command = `sf package create -n ${packageObj.name} -d "${packageObj.description}" -t ${packageObj.type}  -r ${packageObj.path} ${packageObj.orgDependent ? '--org-dependent' : ''} --json`;
    const result = child_process.execSync(command);
    console.log(result.toString());
    const resultObj = JSON.parse(result.toString());
    packageObj.id = resultObj.id;
    return packageObj;
}

export { createPackage };