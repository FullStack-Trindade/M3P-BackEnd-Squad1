const Patient = require("../models/patient");


async function searchPatient(request, response) {
    
    try {

        const patientExists = await Patient.findByPk(request.params.id);
       
        if (!patientExists) {
            response.status(400).json({message: 'O Id do paciente não foi encontrado'});

        } else {
            response.status(200).json(patientExists);  
        };
        
     
    } catch (error) {
        response.status(500).json({message: "Erro 500 - Verifique sua solicitação"})
  
    }
};

module.exports = searchPatient;