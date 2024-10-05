const mongoose = require('mongoose');

const birthdaySchema = new mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: String, required: true } // Consider changing this to Date type if applicable
});

module.exports = mongoose.model('Birthday', birthdaySchema);
