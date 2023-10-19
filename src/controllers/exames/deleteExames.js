const Patient = require('../../models/exame');


async function deleteExame(request, response) {

    try {
        const idExists = await Exame.findByPk(request.params.id);
        
        if (!idExists) {
            response.status(400).json({ message: "Exame não existe." });

        } else {
            await Patient.destroy({where: {id: request.params.id}});
            return response.status(202).json({ message: 'Deletado com sucesso'}); 
        }
    
    
}   catch (error) {
        response.status(500).json({ message: "Erro de Sistema! Tente mais tarde"});
    }
}

module.exports = deleteExame;