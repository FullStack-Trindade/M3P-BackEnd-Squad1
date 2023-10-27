const yup = require("yup");

const validation = yup.object().shape({
    id_patient: yup
    .number()
    .typeError("ID do usuário deve ser um número.")
    .required("ID do usuário é obrigatório.")
    .positive("ID do usuário deve ser positivo.")
    .integer("ID do usuário deve ser um número inteiro."),
    id_doctor: yup
    .number()
    .typeError("ID do médico deve ser um número.")
    .required("ID do médico é obrigatório.")
    .positive("ID do médico deve ser positivo.")
    .integer("ID do médico deve ser um número inteiro."),
    nameExam: yup
    .string()
    .max(64, "O campo tipo deve ter no máximo 64 caracteres")
    .min(8, "O campo nome do exame tem no mínimo 8 caracteres")
    .required("O campo nome do exame é obrigatório"),
    dateExam: yup
    .string()
    .required("O campo data é obrigatório"),
    hourExam: yup
    .string()
    .required("O campo hora é obrigatório"),
    typeExam: yup
    .string()
    .max(32, "O campo tipo deve ter no máximo 64 caracteres")
    .min(4, "O campo nome do exame tem no mínimo 8 caracteres")
    .required("O campo tipo do exame é obrigatório"),
    labExam: yup
    .string()
    .max(32, "O campo nome do laboratório é obrigatório ter no máximo 32 caracteres.")
    .min(4,"O campo nome do laboratório tem no mínimo 8 caracteres"),
    resulExam: yup
    .string()
    .max(1024, "O campo resultado deve ter no máximo 64 caracteres")
    .min(16, "O campo resultado do exame tem no mínimo 16 caracteres",)
    .required("O campo resultado do exame é obrigatório"),
});

function validacaoExame(request, response, next) {
  try {
    validation.validateSync(request.body);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validationExam;
