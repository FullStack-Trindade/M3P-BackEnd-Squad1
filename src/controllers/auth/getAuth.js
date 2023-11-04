const Auth = require('../../models/auth');

async function getAuth (req, res) {
    try {
        const authData = await Auth.findAll();
        return res.status(200).json(authData);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = getAuth;