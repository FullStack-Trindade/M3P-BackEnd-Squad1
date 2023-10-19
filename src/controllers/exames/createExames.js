const Exame = require('../../models/exame');

async function createExame (request, response) {
        console.log(request.body);
    
        try {
            
        const exame = {
            id_paciente: request.body.id_paciente,
            id_medico: request.body.id_medico,
            nomeExame: request.body.nomeExame,    
            dataExame: request.body.dataExame,
            horaExame: request.body.horaExame,
            tipoExame: request.body.tipoExame,
            labExame: request.body.labExame,
            urlExame: request.body.urlExame,
            resultaDoExame: request.body.resultaDoExame,   
            statusExame: true,        
        }

               
         const exameExistente = await Exame.findOne({
            where: {
                id_paciente: exame.id_paciente,
                dataExame: exame.dataExame,
                horaExame: exame.horaExame,
             },
         });

         if (!exameExistente) {
             const newExame = await Exame.create(exame);
             response.status(201).json(newExame)
             
            }else{
                return response.status(400).json({message: 'Já possui o exame'})
        }
        } catch (error) {
            console.log(error);
            response.status(500).json({message: "Erro de Sistema! Tente mais tarde"})
        }       
};

module.exports = createExame;
