const User = require('../../models/user');
const Token = require('../../models/token');

async function resetPasswordRequest (req, res) {
    try {
        const requestFunction = async(email) => {
            const user = await User.findOne({ 
                where: {
                    email: email
                }
            });
            
            let token = await Token.findOne({ 
                where: {
                    id_user: user.id
                }
            });

            if(token) { await token.destroy() }
        }
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = resetPasswordRequest;