const yargs=require('yargs')

console.log(process.argv)
console.log(process.argv[2])

yargs.command({
    command:'add',
    description:'adding a note',
    handler:()=>{
        console.log("Added a note")
    }
})

console.log(yargs.argv)