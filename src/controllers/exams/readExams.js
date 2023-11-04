const Exam = require('../../models/exam');
const User = require('../../models/user');
const Patient = require('../../models/patient');

async function examRead(request, response) {

  try {
    const nomePaciente = request.query.name
      ? request.query.name.replace(/_/g, " ")
      : null;

    if (nomePaciente) {
      const userRequest = await User.findOne({
        where: {
          name: nomePaciente,
        },

      })

      if (userRequest) {

        const patients = await Patient.findOne({
          where: { id_user: userRequest.id },
        })

        if (patients) {
          const exams = await Exam.findAll({
            where: {
              id_patient: patients.id
            }
          })
          return response.status(200).json(exams);
        } else {
          return response.status(400).json({ message: "Não há exames para este paciente." })
        }

      } else {

        return response.status(400).json({ message: "Não há paciente com este nome." })
      }

    } else {
      const listExams = await Exam.findAll()
      return response.status(200).json(listExams)
    };

  } catch (error) {

    return response
      .status(500)
      .json({ message: "Erro ao buscar exames do paciente." });
  }
};

module.exports = examRead;

