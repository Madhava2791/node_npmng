const validator =require('validator')
const chalk=require('chalk')
console.log(chalk.green.bgRed.bold(validator.isEmail('madhava@email.com')))

