const Token = require('../../models/token');

async function sendNewPassword (req, res) {
    try {
        const resetFunction = async(id_user, token, password) => {
            let passwordResetToken = await Token.findOne({ 
                where: {
                    id_user: id_user 
                }
            })

        }
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = sendNewPassword;