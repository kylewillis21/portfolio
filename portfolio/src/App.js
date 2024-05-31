import './styles/App.css';
import "./styles/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import MonkeyDetails from './pages/details/MonkeyType';

function App() {
  return (
    <>
      <Navbar/>
      <div style={{marginRight: '0rem', marginLeft: '0rem', marginTop: '0rem'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/MonkeyType" element={<MonkeyDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
