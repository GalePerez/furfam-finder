import { Link } from 'react-router-dom';
import '../style/home.css';
import '../style/main.css';

function Home() {
    return (
        <>
    <div className='body'>
        <img src="https://stowvets.co.uk/wp-content/uploads/sites/178/2020/10/MiPet-Cover-Pet-Insurance-Banner-Oct20-1.jpg" className="cover-photo" />
        <h1>FurFam Finder</h1>
        <h4>Discover your perfect FurFam today! 🐾🏠 Adopt, love, cherish.</h4>
        <section className="featured-pets">
            <h2>Featured Pets for Adoption</h2>
            <div className="pet-card">
                <img src="pet1.jpg" alt="Featured Pet 1" />
                <h3>Pet Name</h3>
                <p>Breed: Breed Name</p>
                <p>Age: X years</p>
            </div>
            <div className="pet-card">
                <img src="pet2.jpg" alt="Featured Pet 2" />
                <h3>Pet Name</h3>
                <p>Breed: Breed Name</p>
                <p>Age: X years</p>
            </div>
        </section>

      <section className="about-us">
        <h1>About Us</h1>
        <p>At FurFam Finder, we're on a mission to unite hearts and paws.
            <br/>
            With Love and companion, we connect famillies with their forever companions.
            <br/>
            Join us in making tails wag and heart soar.
        </p>
        <Link to="about-us">Learn More</Link>
      </section>
      <section className="contact">
        <h1>QUESTIONS?</h1>
        <Link to="contact-us">Contact Us</Link>
      </section>
    </div>
        </>
    )
}

export default Home