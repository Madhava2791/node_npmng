const path = require('path')
const express = require('express')
const app = express()
const dirpath=path.join(__dirname,'../public')

app.set('view engine', 'hbs')

app.use(express.static(dirpath))

app.get('',(req,res)=>{
    res.render('index')
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help page'
    })
})

// app.get('',(req,res)=>{
//     res.send('<h1>Hello Express</h1>')
// })
// app.get('/help',(req,res)=>{
//     res.send({name:'madhava',age:23})
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>About</h1>')
// })
app.get('/weather',(req,res)=>{
    res.send({
        forecast:'It is sunny..',
        location:'hyderabad'
    })
})
app.listen(3000,()=>{
    console.log('Server is running..')
})