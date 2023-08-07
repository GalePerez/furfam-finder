import { Link } from "react-router-dom";
import '../style/main.css';
import '../style/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
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
			</div>`; */
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="logo1 navbar-brand">
                <img src="./photo/logo.png" alt="logo" width="160" height="40" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i className="fa-solid fa-circle-chevron-down fa-lg" style={{ color: '#e0d625' }}></i>
                </span>
            </button>
            <div className="navbar-buttons">
                <div className="collapse navbar-collapse" id="navbarNav">
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
                </div>
            </div>
        </nav>
            }

        </>
    )
}

export default NavBar