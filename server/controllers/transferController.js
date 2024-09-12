const Transfer = require('../models/transfer')
exports.addTransfer = async (req, res) => {
    try {
        const { from_account_id, to_account_id, date, title, total, tax, note } = req.body;

        const transfer = new Transfer({ 
            from_account_id, 
            to_account_id, 
            date, 
            title, 
            total, 
            tax, 
            note 
        });
        await transfer.save();
        res.status(200).json(transfer)
    } catch (error) {
        res.status(500).json({ message: "Error add transfer", error})
    }
}