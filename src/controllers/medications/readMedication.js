const Medication = require('../../models/medication');

async function medicationRead (request, response) {

        try {
        const id = request.params.id
              
        if (id) {
            const filteredList = await Medication.findAll({
                where: {
                    id_patient: id
                }
            })
            if(filteredList.length == 0) {
                response.status(404).json({menssagem: "Não constam medicamentos para este usário"});
            } 
            return response.status(200).json(filteredList)
        }
        const listMedications = await Medication.findAll();
        return response.status(200).json(listMedications)

    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Erro 500 - Verifique sua solicitação"})
    }
};

module.exports = medicationRead;