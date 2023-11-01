const { Sequelize } = require('sequelize');
const User = require('../../models/user')
const Patient = require('../../models/patient');

const delUser = async (response, request) => {

    const getUsuario = await User.findByPk(request.params.id)
    const getPaciente = await User.findByPk(request.params.id_patient)
    if (getUsuario.id_type !== 3 && getUsuario.id == request.params.id) {
        const findId = await Patient.findOne({
            include: {
                all: true,
                where: {
                    id: getPaciente.id
                }
            }
        })
        if (findId) {
            return response.status(400)
                .json({
                    message: ` Não é possível apagar um paciente caso tenha consulta, 
                exame, medicação, dieta ou exercício cadastrado.
            ` })
        } else {
            const result = await Patient.destroy({
                where: {
                    id: request.params.id
                }
            })
            return response.status(201).json({ mensagem: "Excluido com sucesso." })
        }
    }

}

module.exports = delUser;