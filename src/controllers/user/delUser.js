const { Sequelize } = require('sequelize');
const User = require('../../models/user')

const delUser = async(response, request)=>{
    
    const getUsuario = await User.findByPk(request.body.id)
    if(getUsuario.id_type == 4){
        const getBusca = await Sequelize.query(
             `select users.id as user_id, exames.id as Exame_id from users
             join exames on exames.id = users.id
             join 
             `
            )
    }
}

module.exports = delUser;