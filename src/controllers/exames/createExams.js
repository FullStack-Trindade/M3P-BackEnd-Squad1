const Exam = require('../../models/exam');

async function createExam(request, response) {

    try {
        const newDate = new Date()
    const examTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`


    const exam = {
        id_pacient: request.body.id_pacient,
        id_doctor: request.body.id_doctor,
        examName: request.body.examName,
        dtExam: request.body.dtExam || newDate.setDate(newDate.getDate()),
        examTime: request.body.examTime || examTime,
        examType: request.body.examType,
        examLab: request.body.examLab,
        urlExam: request.body.urlExam,
        examResults: request.body.examResults,
    }


    const examExistente = await Exam.findOne({
        where: {
            id_pacient: exam.id_pacient,
            examName: exam.examName,
            dtExam: exam.dtExam

        },
    });

    if (!examExistente) {
        const newExam = await Exam.create(exam);
        response.status(201).json(newExam)

    } else {
        return response.status(400).json({ message: 'Já possui o exame' })
    }
        
    } catch (error) {
        return response.status(500).json({ message: 'Não foi possível atender sua solicitação' })
    }
    

};

module.exports = createExam;
