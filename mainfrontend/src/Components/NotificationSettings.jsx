import React, { useState } from 'react';

const NotificationSettings = () => {
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(false);

    const handleSmsChange = () => {
        setSmsNotifications(!smsNotifications);
    };

    const handleEmailChange = () => {
        setEmailNotifications(!emailNotifications);
    };

    const handleSaveSettings = () => {
        const settings = {
            smsNotifications,
            emailNotifications,
        };
        // You can implement the save logic here (e.g., send settings to the backend)
        console.log('Saved Settings:', settings);
    };

    return (
        <div className="notification-settings">
            <h2>Notification Settings</h2>
            <p>Manage your SMS and email notifications here.</p>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={smsNotifications}
                        onChange={handleSmsChange}
                    />
                    Enable SMS Notifications
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={emailNotifications}
                        onChange={handleEmailChange}
                    />
                    Enable Email Notifications
                </label>
            </div>
            <button onClick={handleSaveSettings}>Save Settings</button>
        </div>
    );
};

export default NotificationSettings;

