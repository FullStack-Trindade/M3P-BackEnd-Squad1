const Diet = require("../../models/diet");

async function deleteDietById (req, res) {
    try {
        const id = req.params.id;

        const diet = await Diet.findByPk(id);

        await diet.destroy();
        return res.status(202).json();

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = deleteDietById;