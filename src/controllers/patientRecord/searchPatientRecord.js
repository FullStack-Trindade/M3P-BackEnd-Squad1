const { Sequelize } = require("sequelize");

const Patient = require("../../models/patient");
const User = require("../../models/user");

const searchPatientRecordByUser = async (request, response) => {
  try {
    const idPaciente = parseInt(request.params.id);
    const nomePaciente = request.query.name
      ? request.query.name.replace(/_/g, " ")
      : null;

    if (idPaciente && nomePaciente) {
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
    } else if (idPaciente) {
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
    } else if (nomePaciente) {
      const userRequest = await User.findOne({
        where: {
          name: nomePaciente,
        },
      });

      if (userRequest && userRequest.id > 0) {
        const patientRequest = await Patient.findByPk(userRequest.id);

        if (patientRequest && patientRequest.id > 0) {
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
    } else {
      const patients = await Patient.findAll({
        include: { all: true },
        order: [[Sequelize.literal("id"), "ASC"]],
      });

      if (!patients) {
        return res
          .status(400)
          .json({ message: "Não há pacientes com prontuários" });
      }

      const filteredPatients = [];
      patients.forEach((patient) => {
        if (patient.appointments.length > 0 || patient.exams.length > 0) {
          filteredPatients.push(patient);
        }
      });

      if (filteredPatients.length === 0) {
        return res.status(400).json({ message: "Pacientes não encontrados" });
      }

      return res.status(200).json(filteredPatients);
    }
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Erro ao buscar prontuários por paciente." });
  }
};

module.exports = searchPatientRecordByUser;

// VERSÃO MELHORADA PARA FACILITAR MANUTENÇÃO - NÃO TESTADO

// const { Sequelize } = require("sequelize");

// const Patient = require("../../models/patient");
// const User = require("../../models/user");

// const searchPatientRecordByUser = async (request, response) => {
//   try {
//     const idPaciente = parseInt(request.params.id);
//     const nomePaciente = request.query.name
//       ? request.query.name.replace(/_/g, " ")
//       : null;

//     if (idPaciente && nomePaciente) {
//       const userRequest = await User.findOne({
//         where: {
//           name: nomePaciente,
//         },
//       });

//       if (userRequest && userRequest.id === idPaciente) {
//         return getPatientsByUserId(idPaciente, response);
//       } else {
//         return response.status(400).json({ message: "Dados dos pacientes inconsistentes" });
//       }
//     } else if (idPaciente) {
//       return getPatientsById(idPaciente, response);
//     } else if (nomePaciente) {
//       const userRequest = await User.findOne({
//         where: {
//           name: nomePaciente,
//         },
//       });

//       if (userRequest && userRequest.id > 0) {
//         return getPatientsByUserId(userRequest.id, response);
//       } else {
//         return response.status(400).json({ message: "Usuário não encontrado." });
//       }
//     } else {
//       return getAllPatientsWithProntuarios(response);
//     }
//   } catch (error) {
//     return response.status(500).json({ message: "Erro ao buscar prontuários por paciente." });
//   }
// };

// const getPatientsByUserId = async (userId, response) => {
//   const patients = await Patient.findAll({
//     where: { idUser: userId },
//     include: { all: true },
//   });

//   if (!patients || patients.length === 0) {
//     return response.status(400).json({ message: "Não há pacientes com prontuários" });
//   }

//   return response.status(200).json(patients);
// };

// const getPatientsById = async (idPaciente, response) => {
//   const patients = await Patient.findAll({
//     where: { id: idPaciente },
//     include: { all: true },
//   });

//   if (!patients || patients.length === 0) {
//     return response.status(400).json({ message: "Não há pacientes com prontuários" });
//   }

//   return response.status(200).json(patients);
// };

// const getAllPatientsWithProntuarios = async (response) => {
//   const patients = await Patient.findAll({
//     include: { all: true },
//     order: [[Sequelize.literal("id"), "ASC"]],
//   });

//   if (!patients) {
//     return response.status(400).json({ message: "Não há pacientes com prontuários" });
//   }

//   const filteredPatients = patients.filter((patient) => patient.appointments.length > 0 || patient.exams.length > 0);

//   if (filteredPatients.length === 0) {
//     return response.status(400).json({ message: "Pacientes não encontrados" });
//   }

//   return response.status(200).json(filteredPatients);
// };

// module.exports = searchPatientRecordByUser;
