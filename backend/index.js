const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const birthdayRoutes = require('./src/routes/index'); // Ensure this path is correct

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(express.json());

// Use birthday routes
app.use('/api', birthdayRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


