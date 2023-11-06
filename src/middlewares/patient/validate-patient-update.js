const yup = require("yup");

const enderecoSchema = yup.object().shape({
  cep: yup.string().required("CEP é obrigatório."),
  city: yup.string().required("Cidade é obrigatória."),
  state: yup.string().required("Estado é obrigatório."),
  street: yup.string().required("Logradouro é obrigatório."),
  number: yup.string().required("Número é obrigatório."),
  complement: yup.string(),
  neighborhood: yup.string().required("Bairro é obrigatório."),
  reference: yup.string(),
});

const validation = yup.object().shape({
  birth: yup
    .date("Data de nascimento deve estar em formato de data 1990-02-25")
    .required("Data de nascimento é obrigatória")
    .max(new Date(), "Verifique a data de nascimento"),
  maritalStatus: yup
    .string()
    .oneOf(
      [
        "SOLTEIRO(A)",
        "CASADO(A)",
        "DIVORCIADO(A)",
        "VIUVO(A)",
        "SEPARADO(A)",
        "UNIAO_ESTAVEL",
      ],
      "Selecione um Estado Civil válido"
    )
    .required("Este campo é obrigatório"),
  birthplace: yup
    .string()
    .min(8, "O campo naturalidade deve ter pelo menos 5 caracteres")
    .max(64, "O campo naturalidade deve ter no máximo 50 caracteres")
    .required("O campo naturalidade é obrigatório"),
  emergencyContact: yup
    .string()
    .matches(
      /^\(\d{2}\) \d \d{4}-\d{5}$/,
      "No campo Contato de Emergência digite um número de telefone no formato (99) 9 9999-99999"
    )
    .required("O campo Contato de Emergência é obrigatório"),
  allergiesList: yup.string(),
  specificCares: yup.string(),
  healthInsurance: yup.string(),
  insuranceNumber: yup.string(),
  insuranceVality: yup
    .string(),
      adress: enderecoSchema,
});

function validatePatientUpdate(request, response, next) {
  try {
    validation.validateSync(request.body);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validatePatientUpdate;
