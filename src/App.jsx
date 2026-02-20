import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
// Page components
import Home from './pages/Home';
import About from './pages/About';
import Donations from './pages/Donations';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar stays at the top of every page */}
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;