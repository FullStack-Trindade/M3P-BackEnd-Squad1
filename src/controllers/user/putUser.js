const User = require('../../models/user')
const bcrypt = require('bcrypt')

const putUser = async (request, response)=>{

  
    try {
              
        const getUsuario = await User.findOne({
            where: {
                id: request.body.id
            }
        })       
        
        
        if(getUsuario?.email == request.body.email){
            return response.status(409).json({
                msg: `Email: ${request.body.email} já cadastrado!`
            })
        }        
        const password = request.body.password ==! '' ? getUsuario.password : await bcrypt.hash(request.body.password, 10);
        const update = {
            name: request.body.name || getUsuario?.name,
            gender: request.body.gender || getUsuario?.gender,            
            email: request.body.email || getUsuario?.email,
            password: password,
            id_type: request.body.id_type || getUsuario?.id_type,
        }
    
        const updateCadastro = await User.save(update)
        if(updateCadastro) {
            return response.status(200).json({
                msg: `Cadastro do usuário ${updateCadastro.name} atualizado com sucesso`
            })
        }else{
            return response.status(400).json({
                msg: "Não foi possível atualizar o cadastro"
            })
        }
      
    } catch (error) {
        return response.status(500).json({
            msg: 'Não foi possível atender sua solicitação'
        })
    }
   
}

module.exports = putUser