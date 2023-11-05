const yup = require('yup');

const validation = yup.object().shape({
    diet_name: yup
        .string()
        .min(5, 'Motivo da dieta deve ter, no mínimo, 5 caracteres')
        .max(100, 'Motivo da dieta deve ter, no máximo, 100 caracteres')
        .required('Motivo da dieta é obrigatório'),
    diet_date: yup
        .date()
        .min(new Date().toISOString().slice(0,10), 'Não é possível incluir datas anteriores ao dia atual')
        .required('Data da dieta é obrigatória'),
    diet_hour: yup
        .string()
        .required('Hora da dieta é obrigatória'),
    diet_type: yup
        .string()
        .oneOf(
            [
                'CETOGÊNICA',
                'DASH',
                'DUKAN',
                'LOW CARB',
                'MEDITERRÂNEA',
                'PALEOLÍTICA',
                'OUTRA'
            ],
            'Selecione um tipo de dieta válido')
        .required('Tipo da dieta é obrigatório'),
    diet_description: yup
        .string()
        .notRequired(),
    status: yup
        .boolean()
        .default(false)
        .required('Status é obrigatório'),
});

function validateCreateDiet(req, res, next) {
    try {
        const { body } = req;

        if(Object.keys(body).length === 0) {
            return res.status(400).json({ message: 'Requisição não pode ser vazia' });
        }

        validation.validateSync(body);
        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    validateCreateDiet
}