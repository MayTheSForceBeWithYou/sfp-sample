import { createPackage } from "./createPackage";

const packageA1filePath = 'packages/packageA1/packageA1.json';

const packageA1 = createPackage(packageA1filePath);
console.log(JSON.stringify(packageA1, null, 2));