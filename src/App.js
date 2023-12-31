// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './Login';
import * as authService from './services/auth';

const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = authService.getAuthenticationStatus();
    return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={<Login authenticateUser={authService.authenticateUser} />}
                />
                <Route
                    path="/dashboard"
                    element={<ProtectedRoute element={<Dashboard />} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
