import NavBar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurAnimals from "./pages/OurAnimals";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import './style/main.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="our-animals" element={<OurAnimals />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
      <MainContainer />

      <Footer />
    </BrowserRouter>
    </>


  )
}

export default App
