import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Facebook from '../../assets/facebook.svg'
import Google from '../../assets/google.svg'
import Twitter from '../../assets/twitter.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Illustration from '../../assets/Illustration.svg'
import './signIn.css'

function SignIn() {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  }
  return (
    <div className="container signin-container">
      <div className='form-container'>
        <h1>Sign In</h1>
        <h4>New User? <Link>Create an account</Link></h4>
        <form onSubmit={handleOnSubmit}>
          <fieldset>
            <input type="text" placeholder='Username or email' />
          </fieldset>
          <fieldset>
            <input type="password" placeholder='Password' />
          </fieldset>
          <fieldset className='checkbox-fieldset'>
            <input name="remember" type="checkbox" id='check' defaultChecked />
            <label htmlFor="check">Keep me signed in</label>
          </fieldset>
          <button>Sign In</button>
        </form>
        <h4 className='login-h4'>Or Sign In With</h4>
        <div className="login-options-container">
          <img onClick={handleOnSubmit} src={Google} alt="Sign in with Google" />
          <img onClick={handleOnSubmit} src={Facebook} alt="Sign in with Facebook" />
          <img onClick={handleOnSubmit} src={LinkedIn} alt="Sign in with LinkedIn" />
          <img onClick={handleOnSubmit} src={Twitter} alt="Sign in with Twitter" />
        </div>
      </div>
      <img className='illustration' src={Illustration} alt="sign in page illustration" />
    </div>
  )
}

export default SignIn