const yup = require('yup');

const validation = yup.object().shape({
    motivo_consulta: yup
        .string()
        .min(8, 'Motivo da consulta deve ter, no mínimo, 8 caracteres')
        .max(64, 'Motivo da consulta deve ter, no máximo, 64 caracteres')
        .required('Motivo da consulta é obrigatória'),
    data_consulta: yup
        .date()
        // .typeError('Data da consulta deve estar em formato YYYY-MM-DD')
        // #TODO: ajustar formato de data; atualmente aceita datas no formato YYYY-MM-DD e MM-DD-YYYY e mensagem não aparece
        .min(new Date().toISOString().slice(0,10), 'Não é possível incluir datas anteriores ao dia atual')
        .required('Data da consulta é obrigatória'),
    hora_consulta: yup
        .string()
        .required('Hora da consulta é obrigatória'),
    descricao_problema: yup
        .string()
        .min(16, 'Descrição do problema teve ter, no mínimo, 16 caracteres')
        .max(1024, 'Descrição do problema deve ter, no máximo, 1024 caracteres')
        .required('Descrição do problema é obrigatório'),
    medicacao_receitada: yup
        .string()
        .notRequired(),
    dosagem_precaucoes: yup
        .string()
        .min(16, 'Dosagem e precauções teve ter, no mínimo, 16 caracteres')
        .max(256, 'Dosagem e precauções deve ter, no máximo, 256 caracteres')
        .required('Dosagem e precauções é obrigatório'),
    status: yup
        .boolean()
        .required('Status do sistema é obrigatório'),
});

function validateUpdateAppointment(req, res, next) {
    try {
        const { body } = req;

        if (Object.keys(body).length === 0) {
            return res.status(400).json({ message: 'Requisição não pode ser vazia' });
        }

        validation.validateSync(body);
        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    validateUpdateAppointment
}