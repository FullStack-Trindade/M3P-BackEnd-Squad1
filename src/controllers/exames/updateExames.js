const Exam = require('../../models/exam');

async function updateExam(request, response) {
    
    const { id } = request.params;
    const examExisting = await Exam.findByPk(id)

    if (!examExisting) {
        return response.status(400).json({message: 'Exame não encontrado'}) 
    } 

    try {
        const {
            id_patient,
            id_doctor,
            nameExam,    
            dateExam,
            hourExam,
            typeExam,
            labExam,
            urlExam,
            resulExam, 
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

module.exports = updateExam;