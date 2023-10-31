const dayjs = require("dayjs");

const Diet = require("../../models/diet");

async function updateDiet (req, res) {
    try {
        const diet = await Diet.findByPk(req.params.id);

        if (!diet) {
            res.status(400).json({ message: 'Dieta não encontrada' });
        }
        
        const { 
            diet_name,
            diet_date,
            diet_hour,
            diet_type,
            diet_description,
            status
        } = req.body;

        diet.diet_name = diet_name || diet.diet_name;
        diet.diet_date = diet_date || diet.diet_date;
        diet.diet_hour = diet_hour || diet.diet_hour;
        diet.diet_type = diet_type || diet.diet_type;
        diet.diet_description = diet_description || diet.diet_description; 
        diet.status = status || diet.status;
        diet.updated_at = dayjs().subtract(3,'hour');

        await diet.save();
        return res.status(201).json(diet);

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }
}

module.exports = updateDiet;