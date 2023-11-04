const { Sequelize } = require("sequelize");

const Patient = require("../../models/patient");
const User = require("../../models/user");

const searchPatientRecordByUser = async (request, response) => {
  try {
    const idPaciente = parseInt(request.params.id);
    const nomePaciente = request.query.name.replace(/_/g, " ");

    const userRequest = await User.findOne({
      where: {
        name: nomePaciente,
      },
    });

    if (userRequest && userRequest.id > 0) {
      const patientRequest = await Patient.findByPk(idPaciente);

      if (patientRequest && userRequest.id === patientRequest.idUser) {
        
        const patients = await Patient.findAll({
          where: { id: patientRequest.id },
          include: { all: true },
        });

        if (!patients || patients.length === 0) {
          return response
            .status(400)
            .json({ message: "Não há pacientes com prontuários" });
        }

        return response.status(200).json(patients);
      }
      return response
        .status(400)
        .json({ message: "Dados dos pacientes inconsistentes" });
    }
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Erro ao buscar prontuários por paciente." });
  }
};

module.exports = searchPatientRecordByUser;

