// const Adress = require("../../models/adress");
// const Patient = require("../../models/patient");

// async function updatePatient(request, response) {

  
//   try {
//     const patientInDatabase = await Patient.findByPk(request.params.id);
//     const adressInDatabase = await Adress.findByPk(patientInDatabase.adress);

//     if (!patientInDatabase) {
//       return response
//         .status(404)
//         .json({ message: "Cadastro de Paciente não encontrado" });
//     }

//     patientInDatabase.birth = request.body.birth || patientInDatabase.birth;
//     patientInDatabase.maritalStatus =
//       request.body.maritalStatus || patientInDatabase.maritalStatus;
//     patientInDatabase.birthplace =
//       request.body.birthplace || patientInDatabase.birthplace;
//     patientInDatabase.emergencyContact =
//       request.body.emergencyContact || patientInDatabase.emergencyContact;
//     patientInDatabase.rg = patientInDatabase.rg;
//     patientInDatabase.orgaoExpedidor = patientInDatabase.orgaoExpedidor;
//     patientInDatabase.idUser = patientInDatabase.idUser;
//     patientInDatabase.alergiesList =
//       request.body.alergiesList || patientInDatabase.alergiesList;
//     patientInDatabase.specificCares =
//       request.body.specificCares || patientInDatabase.specificCares;
//     patientInDatabase.health_insurance =
//       request.body.health_insurance || patientInDatabase.health_insurance;
//     patientInDatabase.insuranceNumber =
//       request.body.insuranceNumber || patientInDatabase.insuranceNumber;
//     patientInDatabase.insuranceVality =
//       request.body.insuranceVality || patientInDatabase.insuranceVality;
    
//            adressInDatabase ={
//         adressInDatabase.cep = request.body.adress.cep || adressInDatabase.cep,
//         adressInDatabase.city = request.body.adress.cep || adressInDatabase.cep,
//         adressInDatabase.state = request.body.adress.cep || adressInDatabase.cep,
//         adressInDatabase.street = request.body.adress.cep || adressInDatabase.cep,
//         adressInDatabase.number = request.body.adress.cep || adressInDatabase.cep,
//         adressInDatabase.complement = request.body.adress.cep || adressInDatabase.cep,
//         adressInDatabase.neighborhood = request.body.adress.cep || adressInDatabase.cep,
//         adressInDatabase.reference = request.body.adress.cep || adressInDatabase.cep,
//       }
  
//       await adressInDatabase.save();
//     await patientInDatabase.save();

//     response.status(200).json({ message: patientInDatabase });
//   } catch (error) {
//     console.log(error);
//     response.status(500).json({ message: "Erro ao processar sua solicitação" });
//   }
// }

// module.exports = updatePatient;

const Adress = require("../../models/adress");
const Patient = require("../../models/patient");

async function updatePatient(request, response) {
  try {
    // Encontra o paciente no banco de dados
    const patientInDatabase = await Patient.findByPk(request.params.id);

    if (!patientInDatabase) {
      return response.status(404).json({ message: "Cadastro de Paciente não encontrado" });
    }

    // Atualiza os campos do paciente com os valores fornecidos na solicitação
    patientInDatabase.birth = request.body.birth || patientInDatabase.birth;
    patientInDatabase.maritalStatus = request.body.maritalStatus || patientInDatabase.maritalStatus;
    patientInDatabase.birthplace = request.body.birthplace || patientInDatabase.birthplace;
    patientInDatabase.emergencyContact = request.body.emergencyContact || patientInDatabase.emergencyContact;
    patientInDatabase.rg = request.body.rg || patientInDatabase.rg;
    patientInDatabase.orgaoExpedidor = request.body.orgaoExpedidor || patientInDatabase.orgaoExpedidor;
    patientInDatabase.idUser = request.body.idUser || patientInDatabase.idUser;
    patientInDatabase.alergiesList = request.body.alergiesList || patientInDatabase.alergiesList;
    patientInDatabase.specificCares = request.body.specificCares || patientInDatabase.specificCares;
    patientInDatabase.health_insurance = request.body.health_insurance || patientInDatabase.health_insurance;
    patientInDatabase.insuranceNumber = request.body.insuranceNumber || patientInDatabase.insuranceNumber;
    patientInDatabase.insuranceVality = request.body.insuranceVality || patientInDatabase.insuranceVality;

    // Salva as atualizações do paciente no banco de dados
    await patientInDatabase.save();

    // Encontra o registro de endereço relacionado ao paciente
    const adressInDatabase = await Adress.findByPk(patientInDatabase.adress);

    if (!adressInDatabase) {
      return response.status(404).json({ message: "Endereço não encontrado" });
    }
    
    // Atualiza os campos do endereço com os valores fornecidos na solicitação
    adressInDatabase.cep = request.body.adress.cep ? request.body.adress.cep : adressInDatabase.cep;
    adressInDatabase.city = request.body.adress.city ? request.body.adress.city : adressInDatabase.city;
    adressInDatabase.state = request.body.adress.state ? request.body.adress.state : adressInDatabase.state;
    adressInDatabase.street = request.body.adress.street ? request.body.adress.street : adressInDatabase.street;
    adressInDatabase.number = request.body.adress.number ? request.body.adress.number : adressInDatabase.number;
    adressInDatabase.complement = request.body.adress.complement ? request.body.adress.complement : adressInDatabase.complement;
    adressInDatabase.neighborhood = request.body.adress.neighborhood ? request.body.adress.neighborhood : adressInDatabase.neighborhood;
    adressInDatabase.reference = request.body.adress.reference ? request.body.adress.reference : adressInDatabase.reference;


    console.log(adressInDatabase);

    // Salva as atualizações do endereço no banco de dados
    await adressInDatabase.save();

    response.status(200).json({ message: "Paciente e endereço atualizado com sucesso" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}

module.exports = updatePatient;

