const Exame = require('../../models/exame');
const User = require('../../models/user');

async function exameRead (request, response) {

    const idUser = request.params.id;

    
    try {
        
        const user = await User.findByPk(idUser);
        const listaExames = await Exame.findAll({
            where:{
                id_pacient: idUser
            }
        });

        if(!idUser) {
            response.status(404).json({menssagem: "Usuario não encontrado."});
        } else {
            response.status(200).json(idUser)
        }

    } catch (error) {
        response.status(500).json({message: "Erro 500 - Verifique sua solicitação"})
    }
};

module.exports = exameRead;