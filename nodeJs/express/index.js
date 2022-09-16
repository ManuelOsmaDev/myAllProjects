const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('hello word')
})

app.get('/archivo', (req,res) => {
    res.sendFile('./JavaScript-logo.png',{
        root: __dirname
    })
})

app.listen(3000)
console.log('server on port:',3000);