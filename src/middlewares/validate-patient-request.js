const yup = require("yup");

const enderecoSchema = yup.object().shape({
    Cep: yup.string().required("CEP é obrigatório."),
    Cidade: yup.string().required("Cidade é obrigatória."),
    Estado: yup.string().required("Estado é obrigatório."),
    Logradouro: yup.string().required("Logradouro é obrigatório."),
    Numero: yup.string().required("Número é obrigatório."),
    Complemento: yup.string().required("Complemento é obrigatório."),
    Bairro: yup.string().required("Bairro é obrigatório."),
    'Ponto de Referencia': yup.string(),
  });

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
  rg: yup
    .string()
    /*lógica para validar órgão expedidor*/
    .max(20, "Este campo deve ter no máximo 20 caracteres")
    .required("Este campo é obrigatório"),
  birthplace: yup
    .string()
    .min(8, "Este campo deve ter pelo menos 5 caracteres")
    .max(64, "Este campo deve ter no máximo 50 caracteres")
    .required("Este campo é obrigatório"),
  emergencyContact: yup
    .string()
    .matches(
      /^\(\d{2}\) \d \d{4}-\d{5}$/,
      "Digite um número de telefone no formato (99) 9 9999-99999"
    )
    .required("Este campo é obrigatório"),
  allergiesList: yup
    .string(),
     specificCares: yup
    .string(),
  healthInsurance: yup.string(),
  insuranceNumber: yup.string(),
  insuranceVality: yup
  .date("Data de nascimento deve estar em formato de data 1990-02-25"),
  adress: enderecoSchema,
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
