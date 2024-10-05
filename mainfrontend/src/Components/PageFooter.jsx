import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import '../styles/PageFooter.css';

const PageFooter = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Celebratemate. All rights reserved.</p>
                <div className="footer-links">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-service">Terms of Service</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
                    Back to Top
                </button>
            </div>
        </footer>
    );
};

export default PageFooter;




















