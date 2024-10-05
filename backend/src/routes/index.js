const express = require('express');
const birthday = require('../models/birthday'); // Adjust path if necessary
const router = express.Router();

// GET route to display a form (or an information page)
router.get('/add', (req, res) => {
    res.status(200).send('<h2 align="center">Submit your birthday details!</h2>');
});

// POST route to add birthday data
router.post('/add', async (req, res) => {
    try {
        const { name, dob } = req.body;

        if (!name || !dob) {
            return res.status(400).send('<h2 align="center">Name and Date of Birth are required!</h2>');
        }

        const newBirthday = new birthday({ name, dob });
        await newBirthday.save();

        res.status(201).send('<h2 align="center">Data added successfully!</h2>');
    } catch (error) {
        console.error(error);
        res.status(500).send('<h2 align="center">Error adding data</h2>');
    }
});

module.exports = router;
