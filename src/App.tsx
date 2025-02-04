import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Bpmn from './components/bpmn';
import Life from './components/life';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Services />
                  <About />
                  <Contact />
                </>
              } />
              <Route path="/bpmn" element={<Bpmn />} />
              <Route path="/lifeAtLogicNest" element={<Life />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
