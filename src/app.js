import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* Ajoutez d'autres routes ici */}
          </Routes>
        <Footer /> 
        </Suspense>
    </Router>
  );
}

export default App;