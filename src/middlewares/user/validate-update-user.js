const yup = require("yup");

const validation = yup.object().shape({
  name: yup
    .string("O name deve ser uma string")
    .required("Nome é obrigatório.")
    .min(8, "O name deve conter ao menos 8 caracateres")
    .max(64, "O name deve conter no máximo 64 caracateres"),

  gender: yup
    .string("Genero deve ser uma string")
    .required("Genero é obrigatório")
    .oneOf(
      ["MASCULINO", "FEMININO", "NAO_INFORMADO"],
      "Gênero inválido, deverá ser MASCULINO, FEMININO OU NAO_INFORMADO"
    ),
  cpf: yup
    .string("O CPF deve ser uma string")
    // .matches(
    //   /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g,
    //   "No campo CPF digite um número no formato 000.000.000-00"
    // )
    .required("CPF é obrigatório.")
    .min(11, "O CPF deve conter ao menos 11 caracteres")
    .max(14, "O CPF deve conter no máximo 11 caracteres"),

  email: yup
    .string("Email deve ser uma string")
    .email("Você deve inserir um email válido")
    .required("Email é obrigatório"),

  phone: yup
    .string("Telefone deve ser uma string")
    .matches(
      /^\(\d{2}\) \d \d{4}-\d{5}$/,
      "No campo Telefone digite um número de telefone no formato (99) 9 9999-99999"
    )
    .required("Telefone é obrigatório"),

  password: yup
    .string("Senha deve ser uma string.")
    .min(6, "A password deve ter no mínimo 6 caracteres.")
    ,

  id_type: yup
    .number()
    .integer("Campo Tipo deve ser um integer")
    .required("Campo Tipo é obrigatório")
    .min(
      0,
      "Campo tipo deve conter numero de 0 a 3, sendo 0 = Administrador, 1 = Médico, 2 = Enfermeiro(a) e 3 = Paciente"
    )
    .max(
      3,
      "Campo tipo deve conter numero de 0 a 3, sendo 0 = Administrador, 1 = Médico, 2 = Enfermeiro(a) e 3 = Paciente"
    ),
});

const validateUpdateUser = (request, response, next) => {
  try {
    validation.validateSync(request.body);
    next();
  } catch (error) {
    response.status(400).json({
      mensagem: error.message,
    });
  }
};

module.exports = validateUpdateUser;
