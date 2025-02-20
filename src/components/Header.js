import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

function Header() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <header style={{ 
      backgroundColor: isDarkTheme ? '#333' : '#ff6b6b', 
      color: 'white', 
      padding: '1rem',
      backgroundImage: isDarkTheme ? 'none' : 'linear-gradient(to right, #ff6b6b, #ff4757)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About Us</Link></li>
          <li><Link to="/offers" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Offers</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</Link></li>
          <li><Link to="/auth" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '20px' }}>Login/Signup</Link></li>
          <li>
            <button onClick={toggleTheme} style={{ 
              backgroundColor: isDarkTheme ? '#fff' : '#333',
              color: isDarkTheme ? '#333' : '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              cursor: 'pointer'
            }}>
              {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;