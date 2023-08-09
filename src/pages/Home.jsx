import { Link } from 'react-router-dom';
import '../style/home.css';
import '../style/main.css';
import FeaturedPets from '../components/FeaturedPets';
import Button from '../components/button';

function Home() {
    return (
        <>
    <div className='body'>
        <img src="https://stowvets.co.uk/wp-content/uploads/sites/178/2020/10/MiPet-Cover-Pet-Insurance-Banner-Oct20-1.jpg" className="cover-photo" style={{opacity: '60%', width: "100vw"}} />
        <h1 className='title'>FurFam Finder</h1>
        <h4>Discover your perfect FurFam today! 🐾🏠 Adopt, love, cherish.</h4>
        <section className="featured-pets">
            <h2>Featured Pets for Adoption:</h2>
            <FeaturedPets />
        </section>
        <div className='show-more'>
          <Button >Show More</Button>
        </div>

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