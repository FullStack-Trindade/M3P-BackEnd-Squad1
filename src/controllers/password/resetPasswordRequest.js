const User = require('../../models/user');

async function resetPasswordRequest (req, res) {
    try {
        const requestFunction = async(email) => {
            const user = await User.findOne({ 
                where: {
                    email: email
                }
            });
            
        }
    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = resetPasswordRequest;