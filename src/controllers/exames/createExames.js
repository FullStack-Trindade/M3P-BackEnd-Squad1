
const Exame = require('../../models/exame');

async function createExame (request, response) {

    try {
        
        const exame = {
            idPaciente: request.body.idPacient,
            idMedico: request.body.idMedico,
            nomeExame: request.body.nomeExame,    
            dataExame: request.body.dataExame,
            horaExame: request.body.horaExame,
            tipoExame: request.body.tipoExame,
            labExame: request.body.labExame,
            urlExame: request.body.urlExame,
            resultadoExame: request.body.resultadoExame,   
            statusExame: request.body.statusExame,        
        }

/*         if (request.body.nomeExame === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Name'})           
        }

        if (request.body.dataExame === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Gender'})          
        }

        if (request.body.horaExame === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Birth'})        
        }

        if (request.body.tipoExame === "") {
            return  res.status(404).json({message: 'É necessário preencher o campo CPF'})        
        }

        if (request.body.labExame === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Emergency'})        
        }

        if (request.body.resultadoExame === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Allergy'})    
        }

        if (request.body.statusExame === "") {
            return res.status(404).json({message: 'É necessário preencher o campo Birth'})       
        } */
                
        const idPaciente = await Patiente.findOne({where: {idPaciente: request.body.idPaciente}})

        // const existeExame = await Exame.findAll({
        //     where: {
        //         idPaciente: request.body.idPaciente
        //     }
        // }).then ()

        if (idPaciente) {   

        const newExame = await Exame.create(exame)
            res.status(201).json(newExame)

            }else {
                res.status(400).json({message: 'Já possui o exame'})
            }
            
    } catch (error) {
            res.status(500).json({message: "Erro de Sistema! Tente mais tarde"})
    }
};

module.exports = createExame;