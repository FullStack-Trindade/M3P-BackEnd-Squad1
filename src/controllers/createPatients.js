const Patient = require("../models/patient");
const Adress = require("../models/adress");

async function patientRegister(request, response) {
  try {
    const data = {
      birth: request.body.birth,
      maritalStatus: request.body.maritalStatus,
      rg: request.body.rg,
      birthplace: request.body.birthplace,
      emergencyContact: request.body.emergencyContact,
      alergiesList: request.body.alergiesList,
      specificCares: request.body.specificCares,
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

    //primeiro lógica para criar um usuario do tipo paciente

    // depois lógica para pegar o user_id e em complemento a ele, cadastrar um paciente

    const patientDataDb = {
      birth: data.birth,
      /*userid: user.id*/
      maritalStatus: data.maritalStatus,
      rg: data.rg,
      birthplace: data.birthplace,
      emergencyContact: data.emergencyContact,
      alergiesList: data.alergiesList,
      specificCares: data.specific_cares,
      healthInsurance: data.healthInsurance,
      insuranceNumber: data.insuranceNumber,
      insuranceVality: data.insuranceVality,
      adress: data.adress,
    };

    const patient = await Patient.create(patientDataDb);

    //inicio salvar endereço no BD
    const adressDataDb = {
      adress: data.adress,
    };

    const adress = await Adress.create(adressDataDb);

    //fim salvar endereço no BD

    response.status(201).json(patient);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = patientRegister;
