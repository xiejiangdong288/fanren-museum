import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/Home';
import NovelStatsPage from './pages/NovelStats';
import CultivationSystemPage from './pages/CultivationSystem';
import CharacterNetworkPage from './pages/CharacterNetwork';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/novel-stats" element={<NovelStatsPage />} />
          <Route path="/cultivation-system" element={<CultivationSystemPage />} />
          <Route path="/character-network" element={<CharacterNetworkPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
