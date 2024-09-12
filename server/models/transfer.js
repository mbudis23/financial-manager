const mongoose = require('mongoose')
const TransferSchema = new mongoose.Schema({
    from_account_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true},
    to_account_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true},
    date: { type: Date, required: true},
    title : { type: String, required: true},
    total: { type: Number, required: true},
    tax: { type: Number, required: true},
    note : {type: String}
})

module.exports = mongoose.model('Transfer', TransferSchema);