const Account = require('../models/account');

exports.createAccount = async (req, res) => {
    try {
        const { name, balance, user_id } = req.body;

        const account = new Account({ name, balance, user_id });
        await account.save();

        res.status(201).json(account);
    } catch (error) {
        res.status(500).json({ message: 'Error creating account', error });
    }
};
