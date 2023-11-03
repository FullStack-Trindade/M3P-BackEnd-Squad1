const User = require('../../models/user')

const getUser = async (request, response)=>{

    try {
        const getUsuario = await User.findAll()    
        if(getUsuario){
            return response.status(200).json(getUsuario)
        }else{
            return response.status(200).json({
                msg: `Nenhum usuário cadastrado.`
            })
        }
    } catch (error) {
        return response.status(500).json({
            msg: `Não foi possível atender sua solicitação.`,
            error: error.message
        })
    }
    
   
}

module.exports = getUser