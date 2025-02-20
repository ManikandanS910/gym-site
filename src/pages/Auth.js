import React, { useState } from 'react';
import { useMsal } from '@azure/msal-react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { instance } = useMsal();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
  };

  const handleLogin = async () => {
    // Implement Microsoft login logic here
    console.log('Login with Microsoft');
    const response = await instance.loginPopup({
      scopes: ['user.read'],
      redirectUri: 'http://localhost:3000/auth/callback'
    });
    console.log(response);

    const tenantId = response.account.tenantId;
    const userId = response.account.idTokenClaims.oid;
    console.log(`Tenant ID: ${tenantId}, User ID: ${userId}`);

    getSharePointUrl(response.accessToken);

  };

  const getSharePointUrl = async (accessToken) => {
    const response = await fetch('https://graph.microsoft.com/v1.0/me/drive', {
      headers: { 
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
       }
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="auth-container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button type="submit" className="submit-btn">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
      <button onClick={handleLogin}>Login with Microsoft</button>
    </div>
  );
}

export default Auth;