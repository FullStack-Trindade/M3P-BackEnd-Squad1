const Patient = require("../../models/patient");

async function patientList(request, response) {
  try {
    const data = request.query;
    const patient = await Patient.findAll();
    response.json(patient);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = patientList;
