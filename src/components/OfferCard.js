import React from 'react';

function OfferCard({ title, price }) {
  return (
    <div style={{ border: '1px solid #0066cc', padding: '1rem', margin: '1rem', borderRadius: '5px' }}>
      <h3>{title}</h3>
      <p>{price}</p>
      <button style={{ backgroundColor: '#0066cc', color: 'white', border: 'none', padding: '0.5rem 1rem' }}>
        Sign Up
      </button>
    </div>
  );
}

export default OfferCard;