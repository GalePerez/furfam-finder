import { Link } from "react-router-dom"
import '../style/main.css';
import '../style/footer.css';

function Footer () {
    return (
        <>
          <footer className="footer">
            <div className="footer-content">
              <p>&copy; 2023 FurFam Finder. All rights reserved.</p>
              <ul>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
          </footer>
        </>
    )
}

export default Footer