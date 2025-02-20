import React from 'react';
import OfferCard from '../components/OfferCard';

function Offers() {
  const offers = [
    { title: 'Monthly Membership', price: '$50/month' },
    { title: 'Annual Membership', price: '$500/year' },
    { title: 'Personal Training', price: '$30/session' },
  ];

  return (
    <div>
      <h1>Our Offers</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {offers.map((offer, index) => (
          <OfferCard key={index} title={offer.title} price={offer.price} />
        ))}
      </div>
    </div>
  );
}

export default Offers;