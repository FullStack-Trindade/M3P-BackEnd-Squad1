const Diet = require("../../models/diet");

async function deleteDietById (req, res) {
    try {
        const id = req.params.id;
        
        if (id <= 0) {
            return res.status(400).json({ message: 'Identificador deve ser um número positivo' });
        }

        const diet = await Diet.findByPk(id);

        if (!diet) {
            return res.status(400).json({ message: 'Dieta não encontrada' });
        }

        await diet.destroy();
        return res.status(202).json();

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = deleteDietById;