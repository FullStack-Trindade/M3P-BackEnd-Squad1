const User = require('../../models/user')

const delUser = async (request, response) => {

    try {
        const result = await User.findByPk(request.params.id)

        if (!result) {
            return response.status(400).json({
                mensagem: "Id não localizado."
            })
        }

        await User.destroy({
            where: {
                id: request.params.id
            }
        })
        return response.status(200).json({ mensagem: "Excluido com sucesso." })

    } catch (error) {
        return response.status(500).json({ mensagem: "Não foi possível processar sua solicitação." })
    }

}

module.exports = delUser