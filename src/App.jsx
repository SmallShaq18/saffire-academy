import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Academics from './pages/Academics';
import Elementary from './pages/Elementary';
import Middle from './pages/Middle';
import High from './pages/High';
import Athletics from './pages/Athletics';
import Leadership from './pages/Leadership';
import Policy from './pages/Policy';
import Board from './pages/Board';
import Enrollment from './pages/Enrollment';
import Programs from './pages/Programs';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NoPage from './pages/NoPage';
import './saffire.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/elementary" element={<Elementary />} />
        <Route path="/middle" element={<Middle />} />
        <Route path="/high" element={<High />} />
        <Route path="/athletics" element={<Athletics />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/board" element={<Board />} />
        <Route path='/programs' element={<Programs />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="*" element={<NoPage />} /> {/* 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

