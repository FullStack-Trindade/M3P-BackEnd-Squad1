const User = require('../../models/user');

async function userList(request, response) {
  try {
    const list = await User.findAll();
    response.status(200).json(list);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = userList;
