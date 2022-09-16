 const {response} = require('express')
 
 const crearUsuario = (req,res = response)=>{
    return res.json({
     ok:true,
     msg: 'Usuario creado'
    })
}

const loginUsuario = (req,res)=>{
    return res.json({
     ok:true,
     msg: 'login de usuario'
    })
}


module.exports = {
    crearUsuario
}
