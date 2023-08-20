import { Link } from "react-router-dom"
import '../style/main.css';
import '../style/footer.css';
import logo from '/logo.svg';

function Footer () {
    return (
        <>
          <footer className="footer">
              
              <div className="footer-content">
              <div>
                  <Link to="/" className="">
                  <img src={logo} alt="logo" width="60" height="40" />
                  </Link>
                  <Link to="/" className="name" >FurFamFinder</Link>
              </div>
                <div className="footer-pages">
                <ul>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                  <li><Link to="/our-animals">Our Animals</Link></li>
                </ul>
                </div>
                <div className="footer-socials">
                  <ul>
                    <li><Link to="">E-mail</Link></li>
                    <li><Link to="">Facebook</Link></li>
                    <li><Link to="">Instagram</Link></li>
                  </ul>
                </div>
            </div>
            <p>&copy; 2023 FurFam Finder. All rights reserved.</p>
          </footer>
        </>
    )
}

export default Footer