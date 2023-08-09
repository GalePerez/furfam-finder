import { useState } from 'react';
import "../style/contact-us.css"

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    };
    return ( 
        <>
      <div className='body'>
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <section className='form'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br/>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br/>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <br/>
            <button type="submit">Submit</button>
          </form>
        </section>
    </div>
        </>
    )
}

export default ContactUs