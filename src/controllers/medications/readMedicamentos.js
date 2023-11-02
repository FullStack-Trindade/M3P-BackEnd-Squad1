const Medication = require('../../models/medication');
const User = require('../../models/user');

async function medicationRead (request, response) {

    const idUser = request.params.id;

    try {
        const id = request.query.id
              
        if (id) {
            const user = await Medication.findAll({
                where: {
                    id_patient: id
                }
            })
            if(!user) {
                response.status(404).json({menssagem: "Usuario não encontrado."});
            } 
            return response.status(200).json({user})
        }
        const listMedications = await Medication.findAll();
        return response.status(200).json({listMedications})

    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Erro 500 - Verifique sua solicitação"})
    }
};

module.exports = medicationRead;