const mongoose = require('mongoose');
const IncomeSchema = new mongoose.Schema({
    account_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true},
    date: { type: Date, required: true},
    stream: {type: String, required: true},
    amount: { type: Number, required: true},
    note : {type: String}
});

module.exports = mongoose.model('Income', IncomeSchema);