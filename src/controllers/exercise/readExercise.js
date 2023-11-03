const Exercise = require('../../models/exercise');
const User = require('../../models/user');

async function exerciseRead (request, response) {

    const idUser = request.params.id;

    try {
        const id = request.query.id
        console.log(id);
        
        if (id) {
            const user = await Exercise.findAll({
                where: {
                    id_patient: id
                }
            })
            if(!user) {
                response.status(404).json({menssagem: "Usuario não encontrado."});
            } 
            return response.status(200).json({user})
        }
        const listExercise = await Exercise.findAll();
        return response.status(200).json(listExercise)

    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Erro 500 - Verifique sua solicitação"})
    }
};

module.exports = exerciseRead;