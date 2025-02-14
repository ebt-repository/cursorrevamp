import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="fixed bottom-4 left-4 text-xs">
          © 2025 ebt / all rights reserved
        </footer>
      </div>
    </Router>
  );
};

export default App;