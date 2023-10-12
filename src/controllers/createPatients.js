const Patient = require("../../models/patient");

async function patientRegister(request, response) {
  try {
    const data = {
      birth: request.body.birth,
      maritalStatus: request.body.maritalStatus,
      rg: request.body.rg,
      birthplace: request.body.birthplace,
      emergencyContact: request.body.emergencyContact,
      alergiesList: request.body.alergiesList,
      specific_cares: request.body.specific_cares,
      healthInsurance: request.body.healthInsurance,
      insuranceNumber: request.body.insuranceNumber,
      insuranceVality: request.body.insuranceVality,
      adress: request.body.adress,
      /*
      faltam os dados do usuário
      */
    };

     /*

    valida se o paciente já existe no banco de dados

    const userExists = await User.findOne({
      where: { cpf: request.body.cpf },
    });
    
    if (userExists) {
      return response.status(409).json({ message: "Paciente já cadastrado" });
    }

*/

//primeiro lógica para criar um usuario

// depois lógica para pegar o user_id e em complemento a ele, cadastrar um paciente

const patientDataDb = {
    birth: request.body.birth,
    maritalStatus: request.body.maritalStatus,
    rg: request.body.rg,
    birthplace: request.body.birthplace,
    emergencyContact: request.body.emergencyContact,
    alergiesList: request.body.alergiesList,
    specific_cares: request.body.specific_cares,
    healthInsurance: request.body.healthInsurance,
    insuranceNumber: request.body.insuranceNumber,
    insuranceVality: request.body.insuranceVality,
    adress: request.body.adress,
    
  };

    const patient = await Patient.create(patientDataDb);

    response.status(201).json(patient);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = patientRegister;