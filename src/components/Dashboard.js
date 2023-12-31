// Dashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/auth';
import '../Login.css';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    // Fetch the authenticated user's email
    const userEmail = authService.getUserEmail();

    const handleLogout = () => {
        // Call the logoutUser function from authService
        authService.logoutUser();
        // Redirect to the login page after logout
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-navbar">
                <div className="dashboard-logo">
                    <h2>Logo</h2>
                </div>
                <div className="dashboard-nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <button className="dashboard-logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </header>
            {/* Other components go here */}
        </div>
    );
};

export default Dashboard;
