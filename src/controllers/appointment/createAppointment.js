async function createAppointment (req, res) {
    try {
        
    } catch (error) {
        return res.status(500).json({ message: 'Cannot perform requested requisition' });
    }
}

module.exports = createAppointment;