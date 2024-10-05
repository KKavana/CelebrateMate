const User = require('../models/user.model');
const { sendEmail } = require('./notification.service');
const dayjs = require('dayjs'); // Optional: If you want to use a date library for easier handling

module.exports = {
    cronService: async () => {
        try {
            // Calculating tomorrow's date using a date library to handle month-end properly
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            const formattedDate = `${tomorrow.getDate()}/${tomorrow.getMonth() + 1}`;

            // Fetching all users whose birthday is tomorrow
            const friends = await User.find({ dob: formattedDate });

            if (friends.length > 0) {
                for (const friend of friends) {
                    // Sending birthday reminder emails to all friends
                    await sendEmail(friend.name);
                }
            } else {
                // Log if there are no birthdays for tomorrow (instead of sending an email)
                console.info("No birthdays for tomorrow: ", formattedDate);
            }
        } catch (error) {
            console.error('cron-service.js encountered an error:', error);
        }
    },
};
