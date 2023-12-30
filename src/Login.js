// Login.js

import React, { useState } from 'react';
import { firestore } from './firebase'; // Adjust the path based on your project structure

const Login = () => {
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
        try {
            const usersCollection = firestore.collection('users');
            const userDoc = await usersCollection.where('email', '==', email).get();

            if (!userDoc.empty) {
                // Access the first document in the query result
                const userData = userDoc.docs[0].data();
                console.log('User Found:', userData);
                // Perform authentication logic here
            } else {
                console.log('User not found');
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
