const Exam = require('../../models/exam');

async function updateExame(request, response) {
    
    const { id } = request.params;
    const exameExiste = await Exame.findByPk(id)

    if (!exameExiste) {
        return response.status(400).json({message: 'Exame não encontrado'}) 
    } 

    try {
        const {
            id_paciente,
            id_medico,
            nomeExame,    
            dataExame,
            horaExame,
            tipoExame,
            labExame,
            urlExame,
            resultaDoExame, 
        } = request.body;
                
            exameExiste.nomeExame = nomeExame;
            exameExiste.dataExame = dataExame;
            exameExiste.horaExame = horaExame;
            exameExiste.tipoExame = tipoExame;
            exameExiste.labExame = labExame;
            exameExiste.urlExame = urlExame;
            exameExiste.resultaDoExame = resultaDoExame;

            const exameUpdate = await exameExiste.save();
            return response.status(200).json(exameUpdate) 

    } catch (error) {
        return response.status(500).json({message:  "Erro de Sistema! Tente mais tarde"});
    }
};

module.exports = updateExame;