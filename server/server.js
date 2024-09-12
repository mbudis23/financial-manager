const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import Routes
const accountRoute = require('./routes/accountRoute');
const userRoute = require('./routes/userRoute');
const incomeRoute = require('./routes/incomeRoute');
const expenseRoute = require('./routes/expenseRoute')

app.use('/api/account', accountRoute);
app.use('/api/user', userRoute);
app.use('api/income', incomeRoute);
app.use('api/expense', expenseRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
