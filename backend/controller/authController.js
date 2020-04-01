
const express = require ('express');

const User = require ('../model/user');




const router = express.Router(); 

router.post('/cadastro', async (req, res) => {

try
{
    const {email} =req.body;

    if (await User.findOne({email}))
        return res.status(400).send({error: 'Usuario já existe'});


    const user = await User.create(req.body);

    user.password =undefined;

    return res.send ({user})

} catch (err) {

    
    return res.status(400).send({error: 'Falha ao realizar  cadastro'})
    
}




});



router.get('/usuarios', async (req, res) => {
    const user = await User.find(req.body);
    return res.send ({user})
});

module.exports = app => app.use ('/auth', router);