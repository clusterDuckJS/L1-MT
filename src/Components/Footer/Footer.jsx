import React from 'react'
import Facebook from '../../assets/facebook.svg'
import Youtube from '../../assets/youtube.svg'
import Twitter from '../../assets/twitter.svg'
import LinkedIn from '../../assets/linkedin.svg'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className='social-container' >
        <img src={Facebook} alt="Facebook logo" />
        <img src={Twitter} alt="Twitter logo" />
        <img src={LinkedIn} alt="LinkedIn logo" />
        <img src={Youtube} alt="Google logo" />
      </div>
      <small>example@email.com </small>
      <small>Copyright © 2020 Name. All rights reserved.</small>
    </footer>
  )
}

export default Footer