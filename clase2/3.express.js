const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT =  process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())
// app.use((req,res, next)=> {
//     if(req.method !== 'POST') return next()
//     if(req.headers['content-type'] !== 'aplication/json') return next()

//     //solo llegan request que son POST y que tienen el header Content-Type: application/json
//     let body = ''

//     //escuchar el evento data 
//     req.on('data' , chunk => {
//         body += chunk.toString()
//     })

//     req.on('end', () => {
//         const data = JSON.parse(body)
//         data.timestamp  = Date.now() 
//         //mutar la request y meter la informacion en el req.body 
//         req.body = data
//         next()
//     })
// })

app.get('/pokemon/ditto' , (req,res) => {
    res.json(ditto)
})

app.post('/pokemon' ,(req,res) => {
    //req.vody deberiamos guardar en bbdd
    res.status(201).json(req.body)
})

//LA ULTIMA  A LA QUE VA A LLEGAR
app.use((req, res) => {
    res.status(400).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
})
