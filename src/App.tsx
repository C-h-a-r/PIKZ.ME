import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Wiki from './pages/Wiki';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="/discord" element={
              <RedirectPage url="https://discord.gg/pikzstudios" />
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

const RedirectPage = ({ url }: { url: string }) => {
  React.useEffect(() => {
    window.location.href = url;
  }, [url]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl">Redirecting to Discord...</p>
    </div>
  );
};

export default App;