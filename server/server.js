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
app.use('/api/account', accountRoute);

const userRoute = require('./routes/userRoute');
app.use('/api/user', userRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
