const crypto = require('crypto');
const bcrypt = require('bcrypt');

const User = require('../../models/user');
const Token = require('../../models/token');

const bcryptSalt = process.env.BCRYPT_SALT;

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

            let resetToken = crypto.randomBytes(32).toString('hex');
            
            const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));
            
            await new Token({
                id_user: user.id,
                token: hash,
            }).save();
        }
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = resetPasswordRequest;