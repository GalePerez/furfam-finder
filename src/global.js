const navBar = () => {
	const bodyContainer = document.getElementById('navbody')
	bodyContainer.innerHTML = `
		<a href="./index.html" className="logo1 navbar-brand ">
		<img src="./photo/logo.png" alt="logo" width="160" height="40">
		</a>
		<button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span> 
			<i className="fa-solid fa-circle-chevron-down fa-lg" style="color: #e0d625;"></i>
			</span>
		</button>
			<div className="navbar-buttons">
				<nav className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav gap-1 text-center fw-bold">
						<li className="nav-item">
								<a href="./home.html" className="nav-link text-uppercase home">Home</a>
						</li>
						<li className="nav-item">
								<a href="#game-container" className="nav-link text-uppercase discover">Discover</a>
						</li>
						<li className="nav-item">
								<a href="./gamelist.html" className="nav-link text-uppercase browse-nav">Browse</a>
						</li>
					</ul>	

				<form action="" className="search">
				<input type="search" required>
				<i className="fa fa-search"></i>
				</form>	
			</div>
		</nav>`;

		

};

navBar ();