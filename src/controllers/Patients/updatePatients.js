const dayjs = require("dayjs");

const Adress = require("../../models/adress");
const Patient = require("../../models/patient");

async function updatePatient(request, response) {
  try {
    const patientInDatabase = await Patient.findByPk(request.params.id);

    if (!patientInDatabase) {
      return response
        .status(400)
        .json({ message: "Cadastro de Paciente não encontrado" });
    }

    if (
      (request.body.rg && patientInDatabase.rg !== request.body.rg) ||
      (request.body.orgaoExpedidor &&
        patientInDatabase.orgaoExpedidor !== request.body.orgaoExpedidor)
    ) {
      return response
        .status(400)
        .json({ message: "O campo RG e/ou Órgão não pode ser modificado" });
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
    patientInDatabase.health_insurance =
      request.body.health_insurance || patientInDatabase.health_insurance;
    patientInDatabase.insuranceNumber =
      request.body.insuranceNumber || patientInDatabase.insuranceNumber;
    patientInDatabase.insuranceVality =
      request.body.insuranceVality || patientInDatabase.insuranceVality;
    patientInDatabase.updated_at = dayjs().subtract(3, "hour");

    await patientInDatabase.save();

    const adressInDatabase = await Adress.findByPk(patientInDatabase.adress);

    if (!adressInDatabase) {
      return response.status(404).json({ message: "Endereço não encontrado" });
    }

    adressInDatabase.cep = request.body.adress.cep
      ? request.body.adress.cep
      : adressInDatabase.cep;
    adressInDatabase.city = request.body.adress.city
      ? request.body.adress.city
      : adressInDatabase.city;
    adressInDatabase.state = request.body.adress.state
      ? request.body.adress.state
      : adressInDatabase.state;
    adressInDatabase.street = request.body.adress.street
      ? request.body.adress.street
      : adressInDatabase.street;
    adressInDatabase.number = request.body.adress.number
      ? request.body.adress.number
      : adressInDatabase.number;
    adressInDatabase.complement = request.body.adress.complement
      ? request.body.adress.complement
      : adressInDatabase.complement;
    adressInDatabase.neighborhood = request.body.adress.neighborhood
      ? request.body.adress.neighborhood
      : adressInDatabase.neighborhood;
    adressInDatabase.reference = request.body.adress.reference
      ? request.body.adress.reference
      : adressInDatabase.reference;
    adressInDatabase.updated_at = dayjs().subtract(3, "hour");

    await adressInDatabase.save();

    response
      .status(200)
      .json({ message: "Cadastro do Paciente atualizado com sucesso" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}

module.exports = updatePatient;
