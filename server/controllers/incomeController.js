const Income = require('../models/income')

exports.addIncome = async (req, res) => {
    try {
        const { account_id, date, stream, amount, note} = req.body;

        const income = new Income({
            account_id,
            date,
            stream,
            amount,
            note
        });
        await income.save();
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json({message: 'Error adding income', error});
    };
}
