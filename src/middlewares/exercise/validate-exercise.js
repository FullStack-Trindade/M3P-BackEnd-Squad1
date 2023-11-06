const yup = require("yup");

const validation = yup.object().shape({
    seriesName: yup
    .string()
    .max(100, "O campo séries de exercicios deve ter no máximo 100 caracteres")
    .min(5, "O campo séries de exercicios deve ter no mínimo 5 caracteres")
    .required("O campo séries de exercicios é obrigatório"),
    dateExercise: yup
    .string()
    .required("O campo data é obrigatório"),
    hourExercise: yup
    .string()
    .required("O campo hora é obrigatório"),
    typeExercise: yup
    .string()
    .oneOf(
        [
          "RESISTÊNCIA AERÓBICA",
          "RESISTÊNCIA MUSCULAR",
          "FLEXIBILIDADE",
          "FORÇA",
          "AGILIDADE",
          "OUTROS",
        ],
        "Selecione um tipo de exercicio."
      ),
    amountWeek: yup
    .number()
    .typeError("Quantidade de vezes por semana deve ser um número.")
    .required("Quantidade de exercicios semanais é obrigatório.")
    .positive("Quantidade de exercicios semanais deve ser positivo.")
    .integer("Quantidade de exercicios semanais deve ser um número inteiro."),
    descritionExercise: yup
    .string()
    .max(1000, "O campo descrição deve ter no máximo 1000 caracteres")
    .min(10, "O campo descrição do exercicio tem no mínimo 10 caracteres",)
    .required("O campo descrição do exercicio é obrigatório"),
});

function validateExercise(request, response, next) {
  try {
    validation.validateSync(request.body);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validateExercise;