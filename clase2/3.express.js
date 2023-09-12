const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT =  process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.get('/pokemon/ditto' , (req,res) => {
    res.json(ditto)
})

app.post('/pokemon' ,(req,res) => {
    let body = ''

    //escuchar el evento data 
    req.on('data' , chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp  = Date.now()  
        res.status(201).send(data)
    })
})

//LA ULTIMA  A LA QUE VA A LLEGAR
app.use((req, res) => {
    res.status(400).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
})
