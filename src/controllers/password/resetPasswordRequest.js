const crypto = require('crypto');
const bcrypt = require('bcrypt');

const User = require('../../models/user');
const Token = require('../../models/token');
const sendEmail = require('../../utils/email/sendEmail');

const bcryptSalt = process.env.BCRYPT_SALT;
const CLIENT_URL = process.env.CLIENT_URL;

async function resetPasswordRequest (req, res) {
    try {
        const requestFunction = async(email) => {
            const user = await User.findOne({ 
                where: {
                    email: email
                }
            });
            
            if (!user) {
                return res.status(400).json({ message: 'Usuário não possui cadastro' });
            }

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

            const link = `${ CLIENT_URL }/resetarSenha?token=${ resetToken }&id=${ user.id }`;
        
            sendEmail(
                user.email, 
                'Recuperação de senha', 
                { name: user.name, link: link }, 
                './template/requestResetPassword.handlebars'
            )
        
            return link;
        }

        const resetRequest = await requestFunction(req.body.email);

        return res.status(200).json({
            link: resetRequest,
            message: 'Confira seu e-mail para recuperar sua senha'        
        });
        
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = resetPasswordRequest;