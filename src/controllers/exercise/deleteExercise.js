const Exercise = require('../../models/exercise');


async function deleteExercise(request, response) {

    try {
        const idExists = await Exercise.findByPk(request.params.id);
        
        if (!idExists) {
            response.status(400).json({ message: "Série de exercicio não existe." });

        } else {
            await Exercise.destroy({where: {id: request.params.id}});
            return response.status(202).json({ message: 'Deletado com sucesso'}); 
        }
    
    
}   catch (error) {
        response.status(500).json({ message: "Erro de Sistema! Tente mais tarde"});
    }
}

module.exports = deleteExercise;