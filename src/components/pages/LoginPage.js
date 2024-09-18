import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom'; // Add this import
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom'; 
import { db } from '../../firebase'; // Import Firestore
import { getDocs, collection } from 'firebase/firestore'; // Import Firestore functions
import '../../styles/AuthPages.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    console.log('Attempting to log in with:', username, password); // Log the entered username and password

    try {
      // Fetch all users from Firestore and find the one with the matching username
      const querySnapshot = await getDocs(collection(db, 'users'));
      const user = querySnapshot.docs.find(doc => doc.data().username === username);

      if (user) {
        console.log('Found User:', user.data()); // Log the found user data

        // Log the email being used for login
        console.log('Email for login:', user.data().email); 

        // Log in using Firebase with the email from Firestore
        await signInWithEmailAndPassword(auth, user.data().email, password);
        console.log('Logged In User:', user.data().username);
        navigate('/'); // Redirect to home page after successful login
      } else {
        console.log('No user found with that username.'); // Log if no user is found
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login Error:', error); // Log any error that occurs during login
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-btn">Login</button>
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default LoginPage;
