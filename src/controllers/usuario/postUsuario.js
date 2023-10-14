const Usuario = require('../../models/usuario')
const bcrypt = require('bcrypt')

const postUser = async (request, response)=>{
    try {
        const senha = await bcrypt.hash(request.body.senha, 10)
        const getUsuario = Usuario.findOne({
            where: {
                cpf: request.body.cpf
            }
        })

        if(getUsuario.cpf == request.body.cpf){
            return response.status(409).json({
                msg: `Usuario CPF: ${request.body.cpf} já cadastrado!`
            })
        }

        const cadastro = {
            nome: request.body.nome,
            genero: request.body.genero,
            cpf: request.body.cpf,
            email: request.body.email,
            senha: senha,
            id_tipo: request.body.id_tipo,
        }
    
        const novoCadastro = await Usuario.create(cadastro)
        if(novoCadastro) {
            return response.status(201).json({
                msg: `Cadastro do usuário ${cadastro.nome} realizado com sucesso`
            })
        }else{
            return response.status(400).json({
                
            })
        }

      
    } catch (error) {
        return response.status(500).json({
            msg: 'Não foi possível atender sua solicitação'
        })
    }
   
}

module.exports = postUser