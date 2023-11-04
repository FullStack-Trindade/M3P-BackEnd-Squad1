const Exercise = require('../../models/exercise');
const User = require('../../models/user');
const Patient = require('../../models/patient');

async function readExercise(request, response) {

    try {
        const nomePaciente = request.query.name
            ? request.query.name.replace(/_/g, " ")
            : null;

        if (nomePaciente) {
            const userRequest = await User.findOne({
                where: {
                    name: nomePaciente,
                },

            })
            
            if (userRequest) {

                const patients = await Patient.findOne({
                    where: { id_user: userRequest.id },
                })

                if (patients) {
                    const exercise = await Exercise.findAll({
                        where: {
                            id_patient: patients.id
                        }
                    })
                    if (exercise.length>0) {
                        return response.status(200).json(exercise);


                    } else {
                        return response.status(400).json({ message: "Não há série de exercicios para este paciente." })
                    }

                } else {

                    return response.status(400).json({ message: "Não há paciente com este nome." })
                }

            } else {
      
                return response.status(400).json({message: "Não existe paciente com este nome."})
            };

        }else{
            const listExercise = await Exercise.findAll()
                return response.status(200).json(listExercise) 
        }
    } catch (error) {

        return response
            .status(500)
            .json({ message: "Erro ao buscar série de exercicios do paciente." });
    }
};

module.exports = readExercise;

