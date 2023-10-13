const Patient = require('../models/patient');


async function deletePatient(request, response) {

    try {
        const idExists = await Patient.findByPk(request.params.id);
        
        if (!idExists) {
            response.status(400).json({ message: "O Id informado é inválido" });

        } else {
            await Patient.destroy({where: {id: request.params.id}});
            return response.status(202).json({ message: 'Deletado com sucesso'}); 
        }
    
    
}   catch (error) {
        response.status(500).json({ message: "Erro! Confira a sua solicitação."});
    }
}

module.exports = deletePatient;