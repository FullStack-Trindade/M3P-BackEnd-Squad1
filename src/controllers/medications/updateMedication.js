const dayjs = require("dayjs");

const Medication = require('../../models/medication');

async function updateMedication (req, res) {
    try {
        const medicationInDb = await Medication.findByPk(req.params.id);

        if (!medicationInDb) {
            res.status(400).json({ message: 'Medicamento não encontrado' });
        }

        const { 
            nameMedication,
            dateMedication,
            hourMedication,
            typeMedication,
            amountMedication,
            unitMedication,
            observationMedication,
            status
        } = req.body;

        medicationInDb.nameMedication = nameMedication || medicationInDb.nameMedication;
        medicationInDb.dateMedication = dateMedication|| medicationInDb.dateMedication;
        medicationInDb.hourMedication = hourMedication || medicationInDb.hourMedication;
        medicationInDb.typeMedication = typeMedication|| medicationInDb.typeMedication;
        medicationInDb.amountMedication= amountMedication|| medicationInDb.amountMedication;
        medicationInDb.unitMedication = unitMedication || medicationInDb.unitMedication; 
        medicationInDb.observationMedication = observationMedication || medicationInDb.observationMedication; 
        medicationInDb.status = status || medicationInDb.status;
        medicationInDb.updated_at = dayjs().subtract(3,'hour');

        await medicationInDb.save();
        return res.status(200).json(medicationInDb);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = updateMedication;