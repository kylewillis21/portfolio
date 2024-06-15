import './styles/App.css';
import "./styles/navbar.css";
import "./styles/contact.css";
import "./styles/project.css";
import "./styles/home.css";
import "./styles/details.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import MonkeyDetails from './pages/details/MonkeyType';
import CheckersDetails from './pages/details/Checkers';
import BlogDetails from './pages/details/Blog';

function App() {
  return (
    <>
      <Navbar/>
      <div style={{marginRight: '0rem', marginLeft: '0rem', marginTop: '0rem'}}>
        <Routes>

          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/projects/MonkeyType" element={<MonkeyDetails />} />
          <Route path="/portfolio/projects/Checkers" element={<CheckersDetails />} />
          <Route path="/portfolio/projects/Blog" element={<BlogDetails />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
