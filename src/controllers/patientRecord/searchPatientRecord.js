const Patient = require("../../models/patient");
const User = require("../../models/user");
const Exam = require("../../models/exam");
const Appointment = require("../../models/appointment");

const searchPatientRecordByUser = async (request, response) => {
  try {
    const nomeSemTratamento = request.query.name;
    const idPaciente = request.params.id;

    const nomePaciente = nomeSemTratamento.replace(/_/g, " ");

    const userRequest = await User.findOne({
      where: {
        name: nomePaciente,
      },
    });

    const patientRequest = await Patient.findByPk(idPaciente);

    if ((userRequest.id = patientRequest.idUser)) {
      //Lógica de pegar todos os prontuários e filtrar por id_patient em todas as tabelas. Juntar em objeto só e enviar
      return response.status(200).json({
        message: "Aqui vem a lógica de filtro de todos os prontuários",
      });
    }
    return response
      .status(400)
      .json({ message: "Dados dos pacientes inconsistentes" });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Erro ao buscar prontuários por paciente." });
  }
};

module.exports = searchPatientRecordByUser;
