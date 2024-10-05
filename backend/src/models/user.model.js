const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true, 
            trim: true // Removes extra spaces from name
        },
        dob: { 
            type: String, 
            required: true, 
            validate: {
                validator: function(v) {
                    // Check if the format is 'D/M' or 'DD/MM'
                    return /^([1-9]|[12][0-9]|3[01])\/(1[0-2]|0?[1-9])$/.test(v);
                },
                message: props => `${props.value} is not a valid date format!`
            } 
        }
    },
    {
        timestamps: true // Automatically add createdAt and updatedAt timestamps
    }
);

module.exports = mongoose.model('birthdayReminder', userSchema);
