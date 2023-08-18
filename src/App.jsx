import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails/ProjectDetails";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import ContactDetails from "./pages/Contact/ContactDetails.jsx/ContactDetails";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:contactId" element={<ContactDetails />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}
