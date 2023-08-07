const navBar = () => {
	const bodyContainer = document.getElementById('navbody')
	bodyContainer.innerHTML = `
		<a href="./index.html" class="logo1 navbar-brand ">
		<img src="./photo/logo.png" alt="logo" width="160" height="40">
		</a>
		<button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span> 
			<i class="fa-solid fa-circle-chevron-down fa-lg" style="color: #e0d625;"></i>
			</span>
		</button>
			<div class="navbar-buttons">
				<nav class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav gap-1 text-center fw-bold">
						<li class="nav-item">
								<a href="./home.html" class="nav-link text-uppercase home">Home</a>
						</li>
						<li class="nav-item">
								<a href="#game-container" class="nav-link text-uppercase discover">Discover</a>
						</li>
						<li class="nav-item">
								<a href="./gamelist.html" class="nav-link text-uppercase browse-nav">Browse</a>
						</li>
					</ul>	

				<form action="" class="search">
				<input type="search" required>
				<i class="fa fa-search"></i>
				</form>	
			</div>
		</nav>`;

		

};

navBar ();