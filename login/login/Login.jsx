import React, { useState } from 'react';
import './App.css';


export default function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setError('Please fill in both username and password');
    } else {
      // Call API or perform login logic here
      console.log('Login successful!');
    }
  };
  // rest of your backend handling (fetch to API)
  return (
    <>
      <h1>{props.name}</h1>
      <form onSubmit={handleSubmit}>
        <label><b>Username:</b></label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
        />
        <br />
        <label><b>Password:</b></label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
        />
        <br />
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </>
    );
}
