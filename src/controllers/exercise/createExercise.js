const Patient = require('../../models/patient');
const User = require('../../models/user');
const Exercise = require('../../models/exercise');

async function createExercise (request, response) {
    try {
        const patient = await Patient.findByPk(request.body.id_patient);
        const nurse = await User.findByPk(request.body.id_nurse);

        if (!patient) {
            return response.status(400).json({ message: 'Paciente não consta nos registros' });
        }

        if (!nurse || nurse.id_type !== 2) {
            return response.status(400).json({ message: 'Enfermeiro não consta nos registros' });
        }

        const dataExercise = {
            id_patient: patient.id,
            id_nurse: nurse.id,
            seriesName: request.body.seriesName,
            dateExercise: request.body.dateExercise,
            hourExercise: request.body.hourExercise,
            typeExercise: request.body.typeExercise,
            amountWeek: request.body.amountWeek,
            descritionExercise: request.body.descritionExercise,
            status: request.body.status,
        };

        const newExercise = await Exercise.create(dataExercise);
        return response.status(201).json(newExercise);
    
    } catch (error) {
        return response.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = createExercise;