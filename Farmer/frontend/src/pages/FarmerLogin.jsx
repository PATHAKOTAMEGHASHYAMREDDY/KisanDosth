import React, { useState } from 'react';
import '../styles/FarmerLogin.css';

const FarmerLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    password: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Farmer Login:', loginData);
    // Add authentication logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Farmer Signup:', signupData);
    // Add signup logic here
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Farmer Login' : 'Farmer Signup'}</h2>
      
      {isLogin ? (
        <form onSubmit={handleLoginSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      ) : (
        <form onSubmit={handleSignupSubmit} className="login-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={signupData.name}
              onChange={handleSignupChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobileNo"
              value={signupData.mobileNo}
              onChange={handleSignupChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
      )}

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button 
          onClick={toggleForm} 
          className="toggle-btn"
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
      <p>
        Not a farmer? <a href="/customer-login">Customer Login</a>
      </p>
    </div>
  );
};

export default FarmerLogin;