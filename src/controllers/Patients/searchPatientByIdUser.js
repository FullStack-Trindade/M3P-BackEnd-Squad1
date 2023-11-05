const Patient = require("../../models/patient");

async function searchPatientByIdUser(request, response) {
  try {
    const patientExists = await Patient.findOne({
      where: {
        id_user: request.params.id,
      },
    });

    if (!patientExists) {
      response.status(200).json(null);
    } else {
      response.status(200).json(patientExists);
    }
  } catch (error) {
    response
      .status(500)
      .json({ message: "Erro 500 - Verifique sua solicitação" });
  }
}

module.exports = searchPatientByIdUser;
