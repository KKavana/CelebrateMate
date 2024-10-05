// src/components/ReminderList.jsx
import React from 'react';

const ReminderList = ({ reminders }) => {
    return (
        <div>
            <h2>Your Reminders</h2>
            <ul>
                {reminders.length === 0 ? (
                    <p>No reminders available.</p>
                ) : (
                    reminders.map(reminder => (
                        <li key={reminder.id}>
                            {reminder.name} - {new Date(reminder.date).toLocaleDateString()}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ReminderList;
