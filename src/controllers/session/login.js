const User = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Login = async (request, response)=>{
    try {
        if (request.body.email == '' || request.body.password == '') {
            return response.status(400).json({ mensagem: "Usuário ou Senha inválido" })
        }
    
        const getUser = await User.findOne({
            where:{
                email: request.body.email
            }
        })
        
        if (getUser?.email == request.body.email) {
            const password = await bcrypt.compare(request.body.password, getUser.password)
            
            if (password === true) {
                const token = jwt.sign(
                    {
                        id: getUser.id
                    },
                        'secret_key',
                    {
                        expiresIn: '1h'
                    }
                )
                return response.status(200).json({id: getUser.id, name: getUser.name, email: getUser.email, token: token, id_type: getUser.id_type})
            }
    
            return response.status(400).json({ mensagem: "Usuário ou Senha inválido" })
    
        }else{
            return response.status(400).json({ mensagem: "Usuário ou Senha inválido" })
        }
        
    } catch (error) {
        return response.status(500).json({ mensagem: "Não foi possível atender sua solicitação" })
    }

    

}

module.exports = Login;