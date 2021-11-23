const fs=require('fs')
const id ={
    name:'madhava',
    age:'27'
}

const jsonData=JSON.stringify(id)
// console.log(jsonData);
// const objData=JSON.parse(jsonData)
// console.log(objData.name)
fs.writeFileSync('1_2_json.json',jsonData)
const databuffer =fs.readFileSync('1_2_json.json')
// console.log(databuffer)
console.log(databuffer.toString())