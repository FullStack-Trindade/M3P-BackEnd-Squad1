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
            resultExam, 
        } = request.body;
                
            examExisting.nameExam = nameExam;
            examExisting.dateExam = dateExam;
            examExisting.hourExam = hourExam;
            examExisting.typeExam = typeExam;
            examExisting.labExam = labExam;
            examExisting.urlExam = urlExam;
            examExisting.resultExam = resultExam;

            const examUpdate = await examExisting.save();
            return response.status(200).json(examUpdate) 

    } catch (error) {
        console.log(error);
        return response.status(500).json({message:  "Erro de Sistema! Tente mais tarde"});
    }
};

module.exports = updateExam;