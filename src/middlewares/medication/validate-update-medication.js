const yup = require("yup");

const validation = yup.object().shape({
  
  nameMedication: yup
    .string()
    .min(5, "O nome da medicação deve ter, no mínimo, 5 caracteres")
    .max(100, "O nome da medicação deve ter, no máximo, 100 caracteres")
    .required("O nome da medicação é obrigatória"),
  dateMedication: yup.date().required("Data da consulta é obrigatória"),
  hourMedication: yup.string().required("Hora da consulta é obrigatória"),
  typeMedication: yup
    .string()
    .oneOf(
      ["CAPSULA", "COMPRIMIDO", "LIQUIDO", "GEL", "INJECAO"],
      "Selecione um tipo de medicação válido"
    )
    .required("Campo de tipo de medicação é obrigatório"),
  amountMedication: yup.number().required("É necessário informar a quantidade"),
  unitMedication: yup
    .string()
    .oneOf(
      ["MG", "MCG", "G", "ML", "PERCENT"],
      "Selecione uma unidade de medida válida para a medicação"
    )
    .required("informar a quantidade de medida é obrigatório"),
  observationMedication: yup
    .string()
    .min(5, "A observação da medicação deve ter, no mínimo, 10 caracteres")
    .max(100, "A observação da medicação deve ter, no máximo, 1000 caracteres")
    .required("A observação da medicação é obrigatória"),
  status: yup.boolean().required("Status é obrigatório"),
});

function validateUpdateMedication(req, res, next) {
  try {
    const { body } = req;

    if (Object.keys(body).length === 0) {
      return res.status(400).json({ message: "Requisição não pode ser vazia" });
    }

    validation.validateSync(body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  validateUpdateMedication,
};