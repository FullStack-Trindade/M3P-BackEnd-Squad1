const Exercise = require('../../models/exercise');

async function updateExercise(request, response) {
    
    const { id } = request.params;
    const exerciseExisting = await Exercise.findByPk(id)

    if (!exerciseExisting) {
        return response.status(400).json({message: 'Exercicio não encontrado'}) 
    } 

    try {
        const {
            id_patient,
            id_nurse,
            seriesName,
            dateExercise,
            hourExercise,
            typeExercise,
            amountWeek,
            descritionExercise,
        } = request.body;
                
        exerciseExisting.seriesName = seriesName;
        exerciseExisting.dateExercise = dateExercise;
        exerciseExisting.hourExercise = hourExercise;
        exerciseExisting.typeExercise = typeExercise;
        exerciseExisting.amountWeek = amountWeek;
        exerciseExisting.descritionExercise = descritionExercise;

            const exerciseUpdate = await exerciseExisting.save();
            return response.status(200).json(exerciseUpdate) 

    } catch (error) {
        console.log(error);
        return response.status(500).json({message:  "Erro de Sistema! Tente mais tarde"});
    }
};

module.exports = updateExercise;