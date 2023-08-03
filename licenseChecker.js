const pkg = require('./package.json');
const fs = require('fs');
const path = require('path');



let packagePath, licensePath, licenseData = [];


for (let i in pkg.dependencies) {
    packagePath = path.join(__dirname,`node_modules/${i}/package.json`);
    licensePath = path.join(__dirname,`node_modules/${i}/LICENSE`);
    
    // console.log("\n",packagePath, "\n", licensePath);

    let packageContent= require(packagePath);

    let licenseContent='';

    try{
        licenseContent =  fs.readFileSync(licensePath,'utf-8');
    } catch(err){
        
    };

    data = {
        name: packageContent.name,
        version: packageContent.version,
        author: packageContent.author || '',
        license: packageContent.license,
        description: packageContent.description,
        homepage: packageContent.homepage || '',
        repository: packageContent.repository.url || packageContent.repository || '',
        licenseDesc: licenseContent
    }
    licenseData.push(data);

    licenseContent='';
}


// console.log(licenseData);

let filePath = path.join(__dirname,`src/licenseData.json`);
fs.writeFileSync(filePath, JSON.stringify(licenseData));
console.log("License file is successfully generated.")
    
    
