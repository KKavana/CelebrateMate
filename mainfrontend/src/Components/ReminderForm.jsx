// src/components/ReminderForm.jsx
import React, { useState } from 'react';
import { addReminder } from '../utils/api'; // Assuming you have this function in api.js
import './ReminderForm.css';

const ReminderForm = ({ onAddReminder }) => {
    const [reminderData, setReminderData] = useState({ name: '', date: '', notificationDays: 1 });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReminderData({ ...reminderData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
        if (reminderData.date < today) {
            setError('Date must be in the future.');
            return;
        }

        try {
            await addReminder(reminderData);
            onAddReminder(reminderData); // Notify parent to update reminders list
            setMessage('Reminder added successfully!');
            setError('');
            // Clear the form
            setReminderData({ name: '', date: '', notificationDays: 1 });
        } catch (err) {
            console.error('Error adding reminder:', err);
            setError('Failed to add reminder. Please try again.');
            setMessage('');
        }
    };

    return (
        <div className="add-reminder">
            <h1>Add Reminder</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Contact Name" 
                    value={reminderData.name}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="date" 
                    name="date" 
                    value={reminderData.date}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="number" 
                    name="notificationDays" 
                    placeholder="Days before notification" 
                    value={reminderData.notificationDays}
                    onChange={handleChange} 
                    min="1" 
                    required 
                />
                <button type="submit">Add Reminder</button>
            </form>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default ReminderForm;
