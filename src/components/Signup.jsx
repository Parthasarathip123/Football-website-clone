import React, { useState } from 'react';
import '../styles/Login.css';
import { auth, userRef } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;

      await addDoc(userRef, {
        uid: user.uid,
        username: username,
        email: email,
        name: name
      });

      console.log("User " + name + " is created and added");
      navigate('/login'); // Redirect to login page immediately after signup
    } catch (error) {
      if (error.code === "auth/weak-password") {
        console.log("Password is too weak. Please use a stronger password.");
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <div className='login-container'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className='login-box'>
        <div className='input-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
