const nodemailer = require('nodemailer');
const Quote = require('inspirational-quotes');
require('dotenv').config(); // Load environment variables

module.exports = {
    sendEmail: async (name) => {
        try {
            // Get a random inspirational quote
            const randomQuote = Quote.getRandomQuote();
            
            // Define the email subject and body based on the name
            const subject = name === 'Test User' ? 'No Birthday for Today' : `Birthday Reminder: ${name}`;
            const body = name === 'Test User' 
                ? `${randomQuote}` 
                : `Hello Alok, <br /> Send your wishes to <b>${name}</b>. <br /> <br /> -- Your well-wisher ♥`;

            // Create a transporter using your Gmail credentials from the .env file
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,  // Email from .env
                    pass: process.env.PASSWORD, // Password from .env
                },
            });

            // Send email using the transporter
            await transporter.sendMail({
                from: process.env.EMAIL, // sender address from .env
                to: 'kavana31k@gmail.com', // recipient email (can be customized)
                subject, // email subject
                html: body, // email content in HTML format
            });

            console.info("Email sent successfully!");
        } catch (error) {
            // Handle error and log the detailed message
            console.error('Failed to send email:', error.response || error.message);
        }
    },
};
