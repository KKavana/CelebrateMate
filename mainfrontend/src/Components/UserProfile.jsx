// src/components/UserProfile.jsx

import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../utils/api';
import '../styles/UserProfile.css';

const UserProfile = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile();
                setProfile(data);
                setUpdatedProfile(data); // Initialize updatedProfile
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleUpdate = async () => {
        try {
            await updateUserProfile(updatedProfile);
            setProfile(updatedProfile);
            setEditMode(false); // Exit edit mode
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <p>Name: {editMode ? <input value={updatedProfile.name} onChange={e => setUpdatedProfile({ ...updatedProfile, name: e.target.value })} /> : profile.name}</p>
            <p>Email: {editMode ? <input value={updatedProfile.email} onChange={e => setUpdatedProfile({ ...updatedProfile, email: e.target.value })} /> : profile.email}</p>
            {editMode && <button onClick={handleUpdate} className="update-button">Update Profile</button>}
            <button onClick={() => setEditMode(!editMode)} className="update-button">{editMode ? 'Cancel' : 'Edit'}</button>
        </div>
    );
};

export default UserProfile;


