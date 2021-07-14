const express = require('express')
const morgan = require('morgan')
const app = express()

app.set('appName','StaticWeb')
app.set('port',3000)

app.use(morgan('dev'))

app.get('*',(req,res)=>{ // "*" -> Cuando la ruta no existe 
    res.sendFile(__dirname + "/404.html")
})

app.use(express.static('public'))

app.listen(app.get('port'),()=>{
    console.log(app.get('appName'))
    console.log("Server on port ", app.get('port'))
})