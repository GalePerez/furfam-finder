import React, { useState } from 'react'
import '../style/login.css'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(email, password);
    };
  
    return (
      <>
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
          <div className='form_container p-5 rounded bg-white'>
            <form onSubmit={handleSubmit}>
              <h3 className='text-center'> Sign In</h3>
              <div className='mb-2'>
              <label htmlFor="email">UserID</label>
              <input type="ea_id" placeholder='Enter UserID' className='form-control' value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className='mb-2'>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter Password' className='form-control' value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className='mb-2'>
              <input type="checkbox" className='custom-control custom-check' id='check' />
              <label htmlFor="check" className='custom-input-label ms-2'>
                Remember me
              </label>
              <div className='d-grid'>
                <button className='btn btn-primary'>Sign in</button>
              </div>
              <p className='text=end mt-2'>
                Forgot <a href="">Password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login