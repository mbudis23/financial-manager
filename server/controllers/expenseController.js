const Expense = require('../models/expense')

exports.addExpense = async (req, res) => {
    try {
        const { account_id, category_id, date, title, total, note } = req.body;

        const expense = new Expense({
            account_id,
            category_id, 
            date, 
            title, 
            total, 
            note
        });
        await expense.save();
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message: 'Error adding expense', error});
    };
}
