const User = require('../../models/user');
const bcrypt = require('bcrypt')

const postUser = async (request, response)=>{

      
    try {
        const password = await bcrypt.hash(request.body.password, 10)
        const getUsuario = await User.findOne({
            where: {
                cpf: request.body.cpf
            }
        })
        
        if(getUsuario?.cpf == request.body.cpf){
            return response.status(409).json({
                msg: `User CPF: ${request.body.cpf} já cadastrado!`
            })
        }

        if(getUsuario?.email == request.body.email){
            return response.status(409).json({
                msg: `Email: ${request.body.email} já cadastrado!`
            })
        }        
    
        const cadastro = {
            name: request.body.name,
            gender: request.body.gender,
            phone:request.body.phone,
            cpf: request.body.cpf,
            email: request.body.email,
            password: password,
            id_type: request.body.id_type,
        }
    
        const novoCadastro = await User.create(cadastro)
        if(novoCadastro) {
            return response.status(201).json(novoCadastro
            )
        }else{
            return response.status(400).json({
                msg: "Não foi possível realizar o cadastro de usuário"
            })
        }
      
    } catch (error) {
        return response.status(500).json({
            msg: 'Não foi possível atender sua solicitação'
        })
    }
   
}

module.exports = postUser