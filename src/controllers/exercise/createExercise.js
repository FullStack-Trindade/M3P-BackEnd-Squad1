const Patient = require('../../models/patient');
const Exercise = require('../../models/exercise');

async function createExercise(request, response) {

    try {
        const newDate = new Date()
        const exercicioTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`


        const serieExercicio = {
            id_patient: request.body.id_patient,
            id_nurse: request.body.id_nurse,
            seriesName: request.body.seriesName,
            dateExercise: request.body.dateExercise || newDate.setDate(newDate.getDate()),
            hourExercise: request.body.hourExercise || examTime,
            typeExercise: request.body.typeExercise,
            amountWeek: request.body.amountWeek,
            descritionExercise: request.body.descritionExercise,
        }


        const serieExisting = await Exercise.findOne({
            where: {
                id_patient: serieExercicio.id_patient,
                seriesName: serieExercicio.seriesName,
                dateExercise: serieExercicio.dateExercise,
                hourExercise: serieExercicio.hourExercise
            },
        });

        if (!serieExisting) {
            const newSerie = await Exercise.create(serieExercicio);
            response.status(201).json(newSerie)

        } else {
            return response.status(400).json({ message: 'Já possui serie de exercicio' })
        }

    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Não foi possível atender sua solicitação' })
    }


};

module.exports = createExercise;