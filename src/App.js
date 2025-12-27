import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Register from './pages/Register';
import Events from './pages/Events';
import Schedule from './pages/Schedule';
import WatchLive from './pages/WatchLive';
import Sponsors from './pages/Sponsors';
import Rules from './pages/Rules';
import About from './pages/About';
import TeamGear from './pages/TeamGear';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<Events />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/watch" element={<WatchLive />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/about" element={<About />} />
            <Route path="/gear" element={<TeamGear />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          </Routes>
        </main>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              borderRadius: '12px',
              padding: '16px',
            },
            success: {
              duration: 3000,
              theme: {
                primary: '#4aed88',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App; 