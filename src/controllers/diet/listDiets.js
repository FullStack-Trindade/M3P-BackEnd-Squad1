const Diet = require('../../models/diet');

async function listDiets (req, res) {
    try {
        
        const diets = await Diet.findAll();
        return res.status(200).json(diets);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = listDiets;