import { Link } from "react-router-dom";
import '../style/main.css';
import '../style/navbar.css';
import logo from '/logo.png';

function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="logo1 navbar-brand">
                <img src={logo} alt="logo" width="40" height="40" />
        </Link>
        <h4>FurFam Finder</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-buttons">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav gap-1 text-center fw-bold">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-uppercase home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/our-animals" className="nav-link text-uppercase discover">Our Pets</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us" className="nav-link text-uppercase browse-nav">Contact Us</Link>
                     </li>
                    </ul>
                    <form action="" className="search">
                        <input type="search" required />
                        <i className="fa fa-search"></i>
                    </form>
                </div>
            </div>
        </nav> 


        </>
    )
}

export default NavBar