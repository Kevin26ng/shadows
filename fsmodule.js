const fs=require('fs');
//fs.readFile('app.js','utf8',(err,data)=>{
    //console.log(err,data)
//})
fs.writeFile('app.js',"THIS IS A DATA",()=>{
    console.log("WRITTEN")
});
console.log("Finished reading file");