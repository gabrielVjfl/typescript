import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send('Testandooo!')
})

app.get('/teste', (req,res) => {
    res.send("hello world")
})

app.listen(3333)