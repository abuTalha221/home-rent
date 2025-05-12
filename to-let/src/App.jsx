import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Pages
import Home from './Components/Homepage/Home';
import About from './Components/About';
import Services from './Components/Services';
import Layout from './Components/Layout';
import AddProperty from './Components/AddProperty';
import Contact from './Components/Contact';
import Registration from './Components/Registration/Registration';
import Login from './Components/Registration/Login';
import FindHouse from './Components/FindHouse';

// Admin Imports
import AdminLayout from "./Admin/Layout/AdminLayout";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import ManageProperties from "./Admin/Pages/ManageProperties";
import ManageUsers from './Admin/Pages/ManageUsers';

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
      <Routes>
        {/* User Side Layout */}
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/addproperty" element={<AddProperty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-house" element={<FindHouse />} />
        </Route>

        {/* Admin Side Layout */}
        <Route element={<AdminLayout/>}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/manage-properties" element={<ManageProperties/>} />
          <Route path="/admin/manage-users" element={<ManageUsers/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
