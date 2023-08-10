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
            <label htmlFor="name" className='form-label'>Name:</label>
            <input
              type="text"
              id="name"
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br/>
            <label htmlFor="email" className='form-label'>Email:</label>
            <input
              type="email"
              id="email"
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='name@example.com'
            />
            <br/>
            <label htmlFor="message" className='form-label'>Message:</label>
            <textarea
              id="message"
              className='form-control'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
            />
            <br/>
            <div className='button'>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
    </div>
        </>
    )
}

export default ContactUs