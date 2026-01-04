import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import AhwalPage from './components/AhwalPage';
import './App.css';

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle redirect from 404.html
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      const path = redirect.replace('/main', '');
      if (path && path !== '/') {
        navigate(path, { replace: true });
      }
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ahwal" element={<AhwalPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router basename="/main">
      <AppContent />
    </Router>
  );
}

export default App;
