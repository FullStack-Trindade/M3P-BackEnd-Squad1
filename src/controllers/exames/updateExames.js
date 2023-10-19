const Exame = require('../../models/exame');

async function updateExame(request, response) {

    try {

        const { id } = request.params;
        const {
            idPaciente,
            idMedico,
            nomeExame,    
            dataExame,
            horaExame,
            tipoExame,
            labExame,
            urlExame,
            resultadoExame,
            statusExame  
        } = request.body;

                        
        const idExists = await Exame.findByPk(id)
        if (!idExists) {
            return response.status(400).json({message: 'Id não encontrado'}) 
            
        }      

        const cpfExists = await Exame.findOne({
            where: {
                cpf
            }})
        if (cpfExists) {   
            return response.status(400).json({message: 'CPF já consta no Banco de Dados. Confira'})
            
    
        }else {

            const exame = await exame.findByPk(id);
            exame.nomeExame = nomeExame;
            exame.dataExame = dataExame;
            exame.horaExame = horaExame;
            exame.tipoExame = tipoExame;
            exame.labExame = labExame;
            exame.urlExame = urlExame;
            exame.resultadoExame = resultadoExame;
            exame.statusExame = statusExame;

            const exameUpdate = await exame.save();
            return response.status(200).json(exameUpdate) 
        }

    } catch (error) {
        console.log(error)
        return response.status(500).json({message:  "Erro de Sistema! Tente mais tarde"});
    
    }
};

module.exports = updateExame;