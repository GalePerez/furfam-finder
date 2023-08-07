import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/our-animals">Our Animals</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us </Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
            </ul>
        </nav>

        </>
    )
}

export default NavBar