import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import AhwalPage from './components/AhwalPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/ahwal" element={<AhwalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
