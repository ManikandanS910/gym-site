import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import Auth from './pages/Auth';
import { MsalProvider } from '@azure/msal-react';
import msalInstance from './msalConfig';

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <ThemeProvider>
        <Router>
          <div className="App">
            <Header />
            <main style={{ padding: '2rem', minHeight: 'calc(100vh - 100px)' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/auth" element={<Auth />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </MsalProvider>
    
  );
}

export default App;