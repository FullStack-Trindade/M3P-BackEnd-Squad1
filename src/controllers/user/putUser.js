const User = require('../../models/user');
const bcrypt = require('bcrypt');
const dayjs = require('dayjs');

const putUser = async (request, response) => {

    //incluir telefone
    
    try {
        const getUsuario = await User.findOne({
            where: {
                id: request.body.id
            }
        });

        if (getUsuario?.email === request.body.email) {
            return response.status(409).json({
                msg: `Email: ${request.body.email} já cadastrado!`
            });
        }

        const password = request.body.password !== '' ? await bcrypt.hash(request.body.password, 10) : getUsuario.password;

        const update = {
            name: request.body.name || getUsuario?.name,
            gender: request.body.gender || getUsuario?.gender,
            email: request.body.email || getUsuario?.email,
            password: password,
            idType: request.body.idType || getUsuario?.idType,
            phone: request.body.phone || getUsuario?.phone,
            updated_at: dayjs().subtract(3, 'hour').format('YYYY-MM-DD HH:mm:ss'),
        };

        const updateCadastro = await User.update(update, {
            where: {
                id: request.body.id
            }
        });

        if (updateCadastro[0] > 0) {
            return response.status(200).json({
                msg: `Cadastro do usuário ${update.name} atualizado com sucesso`
            });
        } else {
            return response.status(400).json({
                msg: 'Não foi possível atualizar o cadastro'
            });
        }
    } catch (error) {
        return response.status(500).json({
            msg: 'Não foi possível atender sua solicitação'
        });
    }
};

module.exports = putUser;
