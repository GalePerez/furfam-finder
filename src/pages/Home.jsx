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
          <Link to="/our-animals"><Button >Show More</Button></Link>
        </div>
      <section className='about-us-container'>
        <div className='about-us-photos'>
            <img src='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*' style={{width: "200px"}} />
            <img src='https://www.campbellrivervet.com/wp-content/uploads/sites/282/2022/05/Husky-1000x650.jpg' style={{width: "300px"}}/>
            <img src='https://www.dutch.com/cdn/shop/articles/shutterstock_149121098.jpg?v=1668634262' style={{width: "350px"}}/>
        </div>
        <section className="about-us">
          <h1 className='about-us-title'>About Us</h1>
          <p className='about-us-text'>At FurFam Finder, we're on a mission to unite hearts and paws.
              <br/>
              With Love and companion, we connect famillies with their forever companions.
              <br/>
              
              Join us in making tails wag and heart soar.
              <br/>
              <Link to="about-us">Learn More</Link>
          </p>
        </section>
      </section>
      <section className="contact">
          <h1 className="questions">QUESTIONS?</h1>
          <Link to="contact-us" className='contact-us-text'><p>Contact Us Here</p></Link>
      </section>

      
    </div>
        </>
    )
}

export default Home