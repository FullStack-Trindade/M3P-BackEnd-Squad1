const Auth = require("../../models/auth");

async function deleteAuth (req, res) {
    try {
        const id = req.params.id;

        const authData = await Auth.findByPk(id);

        await authData.destroy();
        return res.status(202).json();

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = deleteAuth;