// ProtectedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import * as authService from './services/auth';

const ProtectedRoute = ({ element, role }) => {
    // Check if the user is authenticated and has the required role
    if (authService.isAuthenticated() && authService.getUserRole() === role) {
        return <Route element={element} />;
    } else {
        // Redirect to login if not authenticated or authorized
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
