const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors')


// Load environment variables
dotenv.config();
connectDB();

// Initialize app
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // URL aplikasi Next.js
  }));
// Connect to MongoDB


// Import Routes
const accountRoute = require('./routes/accountRoute');
const userRoute = require('./routes/userRoute');
const incomeRoute = require('./routes/incomeRoute');
const expenseRoute = require('./routes/expenseRoute')
const categoryRoute = require('./routes/categoryRoute')
const transferRoute = require('./routes/transferRoute')

app.use('/api/account', accountRoute);
app.use('/api/user', userRoute);
app.use('/api/income', incomeRoute);
app.use('/api/expense', expenseRoute);
app.use('/api/category', categoryRoute);
app.use('/api/transfer', transferRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
