async function listPatientRecords (req, res) {
    try {

    } catch (error) {
        return res.status(500).json({ message: 'Requisição não pode ser executada' });
    }

}

module.exports = listPatientRecords;