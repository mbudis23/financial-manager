const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
    account_id: {type: mongoose.Schema.Types.ObjectId, ref:'Account', required: true},
    category_id: {type: mongoose.Schema.Types.ObjectId, ref:'Category', required: true},
    date: { type: Date, required: true},
    title : { type: String, required: true},
    total: { type: Number, required: true},
    note : {type: String}
})

module.exports = mongoose.model('Expense', ExpenseSchema);