const User = require("../../models/user");

async function searchUserByCpf(request, response) {
  try {
    if (!request.body.cpf && !request.body.email) {
      response
        .status(400)
        .json({
          message:
            "Você deve fornecer um CPF ou um email para buscar o usuário",
        });
    } else {
      let userExists;

      if (request.body.cpf) {
        userExists = await User.findOne({
          where: {
            cpf: request.body.cpf,
          },
        });
      } else {
        userExists = await User.findOne({
          where: {
            email: request.body.email,
          },
        });
      }

      if (!userExists) {
        response
          .status(400)
          .json({
            message: "Usuário não encontrado com o CPF ou email fornecido",
          });
      } else {
        response.status(200).json(userExists);
      }
    }
  } catch (error) {
    response
      .status(500)
      .json({ message: "Erro 500 - Verifique sua solicitação" });
  }
}

module.exports = searchUserByCpf;
