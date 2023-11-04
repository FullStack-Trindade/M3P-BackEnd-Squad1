const User = require("../../models/user");
const bcrypt = require("bcrypt");
const dayjs = require("dayjs");

const updateUser = async (request, response) => {
  try {
    const { name, gender, email, password, id_type, phone } = request.body;
    const usuarioInDb = await User.findOne({
      where: {
        id: request.params.id,
      },
    });

    if (!usuarioInDb) {
      return response.status(400).json({ message: "Usuário não encontrado" });
    }

    const newPassword = password
      ? await bcrypt.hash(password, 10)
      : usuarioInDb.password;

    await usuarioInDb.update({
      name: name || usuarioInDb.name,
      gender: gender || usuarioInDb.gender,
      email: email || usuarioInDb.email,
      password: newPassword,
      id_type: id_type || usuarioInDb.id_type,
      phone: phone || usuarioInDb.phone,
      updated_at: dayjs().subtract(3, "hour").format("YYYY-MM-DD HH:mm:ss"),
    });

    return response.status(200).json(usuarioInDb);
  } catch (error) {
    return response.status(500).json({
      msg: "Não foi possível atualizar o cadastro de usuário",
    });
  }
};

module.exports = updateUser;

