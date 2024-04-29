import React from 'react'
import './LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1> Sign Up</h1>
        <div className='fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Id'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button > Continue</button>
        <p className='login-part'> 
        Already have an account <span>Login Here</span>
        </p>
        <div className='agree'>
           <input type='checkbox' name='' id=''/>  
           <p>By Continuing , I agree to the term of use</p>
        </div>


         
      </div>

    </div>
  )
}

export default LoginSignup