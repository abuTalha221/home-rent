import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Components/Homepage/Home';
import About from './Components/About';
import Services from './Components/Services';
import Layout from './Components/Layout';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Registration from './Components/Registration/Registration';
import Login from './Components/Registration/Login';
import FindHouse from './Components/FindHouse';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-house" element={<FindHouse />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
