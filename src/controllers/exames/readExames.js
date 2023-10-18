const Exame = require('../../models/exame');

async function exameRead (request, response) {

    try {
     
        const status = request.query;

        if(status.status) {

            if (!["AGUARDANDO", "EXECUTADO"].includes(status.status)) {
            return response.status(400).json({message: 'Valor Inválido para Status'});
        }

            const exame = await Exame.findAll(
                {
                    where: {status: status.status}
                }
            );
            response.status(200).json(exame);

        } else {
            const exame = await Exame.findAll();
            response.json(exame);
        }
    } catch (error) {
        response.status(500).json({message:  "Erro de Sistema! Tente mais tarde"})
    }
};

module.exports = exameRead;