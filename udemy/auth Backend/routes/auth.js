const {Router, response} = require('express');
const crearUsuario = require('../controllers/auth');


const router = Router();

//crear un nuevo usuario
router.post('/new', crearUsuario)

//login de usuario
router.post('/', loginUsuario)

//validar json token
router.get('/renew',(req,res)=>{
    return res.json({
     ok:true,
     msg: 'Renew'
    })
})











module.exports = router