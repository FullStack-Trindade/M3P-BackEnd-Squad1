const Medication = require("../../models/medication");

async function deleteMedicationById (req, res) {
    try {
        const id = req.params.id;
        
        if (id <= 0) {
            return res.status(400).json({ message: 'Identificador deve ser um número positivo' });
        }

        const medicationInDb = await Medication.findByPk(id);

        if (!medicationInDb) {
            return res.status(400).json({ message: 'Medicamento não encontrada' });
        }

        await Medication.destroy();
        return res.status(202).json();

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = deleteMedicationById;