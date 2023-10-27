const Exam = require('../../models/exam');

async function createExam(request, response) {

    try {
        const newDate = new Date()
    const examTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`


    const exam = {
        id_patient: request.body.id_patient,
        id_doctor: request.body.id_doctor,
        nameExam: request.body.nameExam,
        dateExam: request.body.dateExam || newDate.setDate(newDate.getDate()),
        hourExam: request.body.hourExam || examTime,
        typeExam: request.body.typeExam,
        labExam: request.body.labExam,
        urlExam: request.body.urlExam,
        resultExam: request.body.resultExam,
    }


    const examExisting = await Exam.findOne({
        where: {
            id_patient: exam.id_patient,
            nameExam: exam.nameExam,
            dateExam: exam.dateExam

        },
    });

    if (!examExisting) {
        const newExam = await Exam.create(exam);
        response.status(201).json(newExam)

    } else {
        return response.status(400).json({ message: 'Já possui o exame' })
    }
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Não foi possível atender sua solicitação' })
    }
    

};

module.exports = createExam;
