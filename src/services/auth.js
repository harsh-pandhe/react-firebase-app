// auth.js

import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { toast } from 'react-toastify';

const firebaseConfig = {
    apiKey: "AIzaSyDoeEBE7c6X5xyrmRjUBqyPm3yui-T52YM",
    authDomain: "harshpandhe-3beeb.firebaseapp.com",
    databaseURL: "https://harshpandhe-3beeb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "harshpandhe-3beeb",
    storageBucket: "harshpandhe-3beeb.appspot.com",
    messagingSenderId: "963335796302",
    appId: "1:963335796302:web:0ebe2b9dca438b215e751f",
    measurementId: "G-CYEKV0FXYD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const isAuthenticated = () => {
    const authenticated = localStorage.getItem('authenticated') === 'true';
    console.log('isAuthenticated:', authenticated);
    return authenticated;
};

export const getUserRole = () => {
    const role = 'user'; // Replace with your actual logic
    console.log('getUserRole:', role);
    return role;
};

export const authenticateUser = async (email, password, navigate) => {
    try {
        const q = query(collection(db, 'users'), where('email', '==', email));
        const querySnapshot = await getDocs(q);

        const user = querySnapshot.docs[0]?.data();
        if (user && user.password === password) {
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem('userRole', user.role);
            localStorage.setItem('userEmail', user.email); // Save the user's email

            console.log('Authentication successful:', user.email, user.role);

            // Navigate to the dashboard
            navigate('/dashboard');

            // Display success toast message
            toast.success('Authentication successful!', {
                position: toast.POSITION.TOP_CENTER,
            });

            return {
                success: true,
                message: 'Authentication successful!',
                user: { email: user.email, role: user.role },
            };
        } else {
            localStorage.setItem('authenticated', 'false');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userEmail'); // Remove the user's email

            console.log('Authentication failed for:', email);

            // Display error toast message
            toast.error('Authentication failed. Invalid email or password.', {
                position: toast.POSITION.TOP_CENTER,
            });

            return {
                success: false,
                message: 'Authentication failed. Invalid email or password.',
            };
        }
    } catch (error) {
        console.error('Error authenticating user:', error);

        // Display error toast message
        toast.error('Error authenticating user. Please try again.', {
            position: toast.POSITION.TOP_CENTER,
        });

        return {
            success: false,
            message: 'Error authenticating user. Please try again.',
        };
    }
};

export const logoutUser = () => {
    localStorage.setItem('authenticated', 'false');
    localStorage.removeItem('userRole');

    console.log('User logged out.');
};

export const getAuthenticationStatus = () => {
    const authenticated = localStorage.getItem('authenticated') === 'true';
    console.log('getAuthenticationStatus:', authenticated);
    return authenticated;
};

export const getUserEmail = () => {
    // You would typically get the user's email from your authentication service or database
    // For demonstration purposes, assuming the user's email is stored in Firebase Firestore
    const authenticated = getAuthenticationStatus();
    if (authenticated) {
        const userEmail = localStorage.getItem('userEmail');
        console.log('getUserEmail:', userEmail);
        return userEmail;
    } else {
        console.log('getUserEmail: User not authenticated');
        return null;
    }
};