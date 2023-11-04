const bcrypt = require('bcrypt');
const bcryptSalt = process.env.BCRYPT_SALT;

const Token = require('../../models/token');
const User = require('../../models/user');
const sendEmail = require('../../utils/email/sendEmail');

async function sendNewPassword (req, res) {
    try {
        const resetFunction = async(id_user, token, password) => {
            let passwordResetToken = await Token.findOne({ 
                where: {
                    id_user: id_user 
                }
            })

            if (!passwordResetToken) {
                return res.status(400).json({ message: 'Token de recuperação de senha inválido' });
            }

            const isValid = await bcrypt.compare(token, passwordResetToken.token);

            if (!isValid) {
                return res.status(400).json({ message: 'Token de recuperação de senha inválido' });
            }
            
            const hash = await bcrypt.hash(password, Number(bcryptSalt));

            const user = await User.findOne({ 
                where: {
                    id: id_user 
                }
            });

            await user.update(
                { 
                    password: hash,
                    updated_at: dayjs().subtract(3, "hour").format("YYYY-MM-DD HH:mm:ss"),
                }
            ). then(updatedUser => console.log(JSON.stringify(updatedUser, null, 2)));

            sendEmail(
                user.email,
                'Recuperação de senha bem sucedida',
                { name: user.name },
                './template/resetPassword.handlebars'
            );

            await passwordResetToken.destroy();
        
            return true;
        }
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = sendNewPassword;