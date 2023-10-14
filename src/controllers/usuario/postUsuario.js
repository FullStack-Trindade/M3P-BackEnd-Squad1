const Usuario = require('../../models/usuario')
const bcrypt = require('bcrypt')

const postUser = async (request, response)=>{
    const senha = 10//await bcrypt.hash(request.body.senha, 10)
    const cadastro = {
        nome: request.body.nome,
        genero: request.body.genero,
        cpf: request.body.cpf,
        email: request.body.email,
        senha: senha,
        id_tipo: request.body.id_tipo,
    }

    const novoCadastro = await Usuario.create(cadastro)
    return response.status(200).json({
        msg: `Cadastro do usuário ${cadastro.nome} realizado com sucesso`
    })
}

module.exports = postUser