const Auth = require("../../models/auth");

async function createAuth (req, res) {
    try {
        const { id_user, token_user, id_type } = req.body;

        if (!id_user || !token_user || !(id_type >= 0 && id_type <= 3) ) {
            return res.status(400).json({ message: 'Dados incompletos. Por favor, reenvie os dados.' });
        }

        const authData = {
            id_user: id_user,
            token_user: token_user,
            id_type: id_type
        };

        const newAuth = await Auth.create(authData);
        return res.status(201).json(newAuth);
    
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = createAuth;