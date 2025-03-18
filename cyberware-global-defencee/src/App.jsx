// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Newsletter from "./pages/Newsletter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// Import Service Pages
import ServiceSIEM from "./pages/ServiceSIEM";
import ServicePenetration from "./pages/ServicePenetration";
import ServicesIncident from "./pages/ServicesIncident";
import ServiceNetwork from "./pages/ServiceNetwork";
import ServiceAwareness from "./pages/ServiceAwareness";
import Industries from "./pages/Industries";
import JobsPage from "./pages/JobsPage";
import "./App.css";
import ContactUs from "./pages/ContactUs";
import Partnership from "./pages/Partnership";

function App() {
  return (
    <Router>
        <Header />
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/contact" element={<ContactUs />} />
        
        {/* Service Detail Routes */}
        <Route path="/services/siem" element={<ServiceSIEM />} />
        <Route path="/services/penetration" element={<ServicePenetration />} />
        <Route path="/services/incident" element={<ServicesIncident />} />
        <Route path="/services/network" element={<ServiceNetwork />} />
        <Route path="/services/awareness" element={<ServiceAwareness />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/jobs" element={<JobsPage />} />
        
        <Route path="*" element={<Newsletter />} />
        <Route path="/partnership" element={<Partnership />} />
        


        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;