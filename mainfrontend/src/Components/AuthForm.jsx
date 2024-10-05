import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const url = isRegistering ? '/api/register' : '/api/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        setLoading(false);

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem('token', token);
            navigate('/dashboard');
        } else {
            const errorMessage = await response.text();
            setError(errorMessage || 'Error logging in or registering.');
        }
    };

    return (
        <div className="auth-form">
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password (6-7 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    maxLength={7}
                />
                {error && <div className="error-message">{error}</div>} {/* Display error message */}
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : (isRegistering ? 'Register' : 'Login')}
                </button>
                <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? 'Switch to Login' : 'Switch to Register'}
                </button>
            </form>
        </div>
    );
};

export default AuthForm;
