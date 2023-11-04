const bcrypt = require('bcrypt');

const Token = require('../../models/token');
const User = require('../../models/user');

async function sendNewPassword (req, res) {
    try {
        const resetFunction = async(id_user, token, password) => {
            let passwordResetToken = await Token.findOne({ 
                where: {
                    id_user: id_user 
                }
            })

            const isValid = await bcrypt.compare(token, passwordResetToken.token);

            const user = await User.findOne({ 
                where: {
                    id: id_user 
                }
            }); 
        }
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = sendNewPassword;