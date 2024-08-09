import React from 'react';
import './App.css';
import Login from './Login.jsx';

export default function LoginPage() 
{
  return (
    <div className="login-container" background="./heav.png">
      <Login name="Login" />
    </div>
  );
}

