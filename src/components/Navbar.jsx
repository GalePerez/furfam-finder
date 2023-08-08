import { Link } from "react-router-dom";
import '../style/main.css';
import '../style/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import logo from '/logo.png';
import { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }
    return (
        <>
        {/* <Link to="/" className="logo1 navbar-brand ">
		<img src="./photo/logo.png" alt="logo" width="160" height="40" />
		</Link>
		<button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span> 
			<i className="fa-solid fa-circle-chevron-down fa-lg" style={{color: '#e0d625'}}></i>
			</span>
		</button>
			<div className="navbar-buttons">
				<nav className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav gap-1 text-center fw-bold">
						<li className="nav-item">
								<Link to="/" className="nav-link text-uppercase home">Home</Link>
						</li>
						<li className="nav-item">
								<Link to="/our-animals" className="nav-link text-uppercase discover">Discover</Link>
						</li>
						<li className="nav-item">
								<Link to="/contact-us" className="nav-link text-uppercase browse-nav">Browse</Link>
						</li>
					</ul>	

				<form action="" className="search">
                    <input type="search" required />
                    <i className="fa fa-search"></i>
				</form>	
                </nav>
			</div>`; 
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="logo1 navbar-brand">
                <img src={logo} alt="logo" width="40" height="40" />
            </Link>
            <h4>FurFam Finder</h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        </nav> */

            <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            FurFamFinder
        </Link>
        <div className={`nav-menu navbar-nav gap-1 text-center fw-bold ${isOpen ? 'active' : ''}`}>
            <ul className="nav-list">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/our-animals" className="nav-link">
                Our Animals
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                Contact Us
                </Link>
            </li>
            <li className="nav-item">
            </li>
            </ul>
        </div>
        <div className={`burger ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        </div>
    </nav>
        }


        </>
    )
}

export default NavBar