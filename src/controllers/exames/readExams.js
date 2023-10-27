const Exam = require('../../models/exam');
const User = require('../../models/user');

async function examRead (request, response) {

    const idUser = request.params.id;

    try {
        const id = request.query.id
        console.log(id);
        
        if (id) {
            const user = await Exam.findAll({
                where: {
                    id_paciente: id
                }
            })
            if(!user) {
                response.status(404).json({menssagem: "Usuario não encontrado."});
            } 
            return response.status(200).json({user})
        }
        const listaExames = await Exame.findAll();
        return response.status(200).json({listaExames})

    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Erro 500 - Verifique sua solicitação"})
    }
};

module.exports = examRead;