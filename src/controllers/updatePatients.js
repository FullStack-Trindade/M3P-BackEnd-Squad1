const Patient = require("../models/patient");

async function updatePatient(request, response) {
  try {
    const patientInDatabase = await Patient.findByPk(request.params.id);
    if (!patientInDatabase) {
      return response
        .status(404)
        .json({ message: "Cadastro de Paciente não encontrado" });
    }

    patientInDatabase.birth = request.body.birth || patientInDatabase.birth;
    patientInDatabase.maritalStatus =
      request.body.maritalStatus || patientInDatabase.maritalStatus;
    patientInDatabase.birthplace =
      request.body.birthplace || patientInDatabase.birthplace;
    patientInDatabase.emergencyContact =
      request.body.emergencyContact || patientInDatabase.emergencyContact;
    patientInDatabase.alergiesList =
      request.body.alergiesList || patientInDatabase.alergiesList;
    patientInDatabase.specificCares =
      request.body.specificCares || patientInDatabase.specificCares;
    patientInDatabase.healthInsurance =
      request.body.healthInsurance || patientInDatabase.healthInsurance;
    patientInDatabase.health_insurance =
      request.body.health_insurance || patientInDatabase.health_insurance;
    patientInDatabase.insuranceNumber =
      request.body.insuranceNumber || patientInDatabase.insuranceNumber;
    patientInDatabase.insuranceVality =
      request.body.insuranceVality || patientInDatabase.insuranceVality;
    patientInDatabase.adress = request.body.adress || patientInDatabase.adress;

    await patientInDatabase.save();

    // lógica para atualizar o usuário

    response.status(200).json({ message: patientInDatabase });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}

module.exports = updatePatient;
