import './App.css';
import Nav from './components/nav/Nav.js';
import Home from './components/home/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;