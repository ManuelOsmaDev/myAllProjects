const express = require('express');

const app = express();
const port = 4000;


//crear el servidor 
app.listen(port,()=>{
    console.log(`funcionando en el puerto ${port}`);
})

//Mis rutas
app.use( '/api/auth', require('./routes/auth') )


