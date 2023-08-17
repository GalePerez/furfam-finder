import NavBar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurAnimals from "./pages/OurAnimals";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';
import Admin from "./pages/Admin";
import { Provider } from "react-redux";
import store from "./store/store";
import AdminAdoptionList from "./pages/admin-functions/AdminAdoptionList";
import AdminPetList from "./pages/admin-functions/AdminPetList";
import AdminShelterList from "./pages/admin-functions/AdminShelterList";
import AdminFeaturedPets from "./pages/AdminFeaturedPets";
import AdminContainer from "./pages/admin-functions/AdminContainer";


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="our-animals" element={<OurAnimals />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        <MainContainer />
        <AdminContainer />
              <Routes>
              <Route path="/featured-pets" element={<AdminFeaturedPets />} />
              <Route path="/admin-pet-list" element={<AdminPetList />} />
              <Route path="/admin-adoption-list" element={<AdminAdoptionList />} />
              <Route path="/admin-shelter-list" element={<AdminShelterList />} />
              </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
    </>


  )
}

export default App
