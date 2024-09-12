const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema({
    name: {type: String, required: true},
    budget : {type: Number, required: true}
});

module.exports = mongoose.model('Category', CategorySchema);