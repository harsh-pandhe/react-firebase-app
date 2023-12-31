import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as authService from './services/auth';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Use the authenticateUser function from authService
            const result = await authService.authenticateUser(email, password, navigate);

            if (result.success) {
                console.log('Login successful:', result.user);
                navigate('/dashboard');
            } else {
                // Display toast message for authentication failure
                toast.error(result.message, {
                    position: toast.POSITION.TOP_CENTER,
                });
                console.log('Login failed:', result.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Display a generic error toast message
            toast.error('An error occurred. Please try again.', {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    };

    return (
        <div className="login-container login-page">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password webauthn"
                    />
                </label>
                <button type="submit">Login</button>
            </form>

            {/* Toast container for displaying messages */}
            <ToastContainer
                position="top-center"
                autoClose={5000} // Adjust the duration as needed
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Login;
