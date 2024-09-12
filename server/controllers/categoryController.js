const Category = require("../models/category");

exports.createCategory = async (req, res) => {
    try {
        const { name,budget } = req.body;
        const category = new Category({ 
            name, 
            budget
        });
        res.staus(200).json(category);
    } catch (error) {
        res.status(500).json({
            message: 'Error creating category',
            error
        });
    };
}