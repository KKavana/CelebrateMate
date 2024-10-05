// src/components/Dashboard.jsx
import React, { useState } from 'react';
import UserProfile from './UserProfile';
import ReminderForm from './ReminderForm'; // Form for adding reminders
import RemindersList from './RemindersList'; // Display list of reminders
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [reminders, setReminders] = useState([]);

    const addReminder = (newReminder) => {
        setReminders((prevReminders) => [...prevReminders, newReminder]);
    };

    return (
        <div className="dashboard">
            <h1>Your Dashboard</h1>
            <UserProfile />
            <ReminderForm onAddReminder={addReminder} /> {/* Pass the function to handle new reminders */}
            <RemindersList reminders={reminders} /> {/* Display the reminders list */}
        </div>
    );
};

export default Dashboard;
