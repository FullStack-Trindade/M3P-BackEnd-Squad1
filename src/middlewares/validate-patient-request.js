const yup = require("yup");

const validation = yup.object().shape({
  idUser: yup
    .number("ID do usuário é obrigatório.")
    .typeError("ID do usuário deve ser um número.")
    .required("ID do usuário é obrigatório.")
    .positive("ID do usuário deve ser positivo.")
    .integer("ID do usuário deve ser um número inteiro."),
  birth: yup
    .date("Data de nascimento deve estar em formato de data 1990-02-25")
    .required("Data de nascimento é obrigatória"),
  maritalStatus: yup
    .string()
    .oneOf(
      [
        "Solteiro(a)",
        "Casado(a)/ União Estável",
        "Viúvo(a)",
        "Separado(a)",
        "Divorciado(a)",
      ],
      "Selecione uma opção válida"
    ),
  rg: yup
    .string()
    .max(20, "Este campo deve ter no máximo 20 caracteres")
    .required("Este campo é obrigatório"),
  birthplace: yup
    .string()
    .min(5, "Este campo deve ter pelo menos 5 caracteres")
    .max(50, "Este campo deve ter no máximo 50 caracteres")
    .required("Este campo é obrigatório"),
  emergencyContact: yup
    .string()
    .matches(
      /^\(\d{2}\) \d \d{4}-\d{5}$/,
      "Digite um número de telefone no formato (99) 9 9999-99999"
    )
    .required("Este campo é obrigatório"),
  allergiesList: yup
    .string()
    .max(200, "Este campo deve ter no máximo 200 caracteres"),
  specificCares: yup
    .string()
    .max(200, "Este campo deve ter no máximo 200 caracteres"),
  healthInsurance: yup.string(),
  insuranceNumber: yup.string(),
  insuranceVality: yup.string(),
  adress: yup.string().min(50, "Este campo deve ter no mínimo 50 caracteres"),
});

function validatePatientRequest(request, response, next) {
  try {
    validation.validateSync(request.body);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validatePatientRequest;
