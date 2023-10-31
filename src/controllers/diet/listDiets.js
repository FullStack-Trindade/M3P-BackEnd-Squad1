const Diet = require('../../models/diet');

async function listDiets (req, res) {
    try {
        if (filter.id) {
            if (filter.id <= 0) {
                return res.status(400).json({ message: 'O ID do paciente deve ser um número positivo' });
            }

            const diets = await Diet.findAll(
                { where: { id_patient: filter.id } }
            );

            if (diets.length === 0) {
                return res.status(400).json({ message: 'Paciente não possui dietas cadastradas' });
            }

            return res.status(200).json(diets);
        }
        
        const diets = await Diet.findAll();
        return res.status(200).json(diets);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = listDiets;