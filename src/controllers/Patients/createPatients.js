const Patient = require("../../models/patient");
const Adress = require("../../models/adress");
const User = require("../../models/user");

async function patientRegister(request, response) {
  try {
    const { idUser } = request.body;

    const usuarioById = await User.findOne({
      where: {
        id: idUser,
      },
    });

    const pacienteByIdUser = await Patient.findOne({
      where: {
        idUser: idUser,
      },
    });

    if (!usuarioById) {
      return response.status(409).json({
        msg: "O Paciente deve estar vinculado a um cadastro de usuário. Entre em contato com o administrador",
      });
    }

    if (pacienteByIdUser) {
      return response.status(409).json({
        msg: "Só pode haver um cadastro de paciente para cada usuário. Entre em contato com o administrador",
      });
    }
     const dataAdress = {
      cep: request.body.adress.cep,
      city: request.body.adress.city,
      state: request.body.adress.state,
      street: request.body.adress.street,
      number: request.body.adress.number,
      complement: request.body.adress.complement,
      neighborhood: request.body.adress.neighborhood,
      reference: request.body.adress.reference
     }
    const adress = await Adress.create(dataAdress);
    
    const dataPatient = {
      birth: request.body.birth,
      maritalStatus: request.body.maritalStatus,
      rg: request.body.rg,
      orgaoExpedidor: request.body.orgaoExpedidor,
      birthplace: request.body.birthplace,
      emergencyContact: request.body.emergencyContact,
      alergiesList: request.body.alergiesList,
      specificCares: request.body.specificCares,
      healthInsurance: request.body.healthInsurance,
      insuranceNumber: request.body.insuranceNumber,
      insuranceVality: request.body.insuranceVality,
      adressId: adress.id,
      idUser: request.body.idUser,
    };

    const patient = await Patient.create(dataPatient);

    response.status(201).json(patient);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = patientRegister;