const Auth = require("../../models/auth");

async function deleteAuth (req, res) {
    try {
        const id = req.params.id;

        if (id <= 0) {
            return res.status(400).json({ message: 'Identificador deve ser um número positivo' });
        }

        const authData = await Auth.findByPk(id);

        if (!authData) {
            return res.status(400).json({ message: 'Autorização não encontrada' });
        }

        await authData.destroy();
        return res.status(202).json();

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = deleteAuth;