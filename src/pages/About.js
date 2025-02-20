import React from 'react';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are dedicated to helping our members achieve their fitness goals in a supportive and motivating environment.</p>
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Our state-of-the-art gym" />
        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="One of our expert trainers" />
      </div>
    </div>
  );
}

export default About;