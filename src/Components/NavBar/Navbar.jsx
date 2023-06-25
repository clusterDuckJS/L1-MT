import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import './navbar.css';

function Navbar() {
  const { setShowAsia, setShowEurope, showAsia, showEurope } = useContext(GlobalContext);

  const [clicked, setClicked] = useState(false)

  const handleAllClick = () => {
    setShowAsia(false);
    setShowEurope(false);
    setClicked(false);
  };

  const handleAsiaClick = () => {
    setShowAsia(true);
    setShowEurope(false);
    setClicked(false);
  };

  const handleEuropeClick = () => {
    setShowAsia(false);
    setShowEurope(true);
    setClicked(false);
  };

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <header>
      <h1>Countries</h1>
      <nav>
        <ul id='navbar' className={clicked ? "#navbar" : "#navbar active"}>
          <li className={!showAsia && !showEurope ? 'nav-link active' : 'nav-link'} onClick={handleAllClick}>
            All
          </li>
          <li className={showAsia ? 'nav-link active' : 'nav-link'} onClick={handleAsiaClick}>
            Asia
          </li>
          <li className={showEurope ? 'nav-link active' : 'nav-link'} onClick={handleEuropeClick}>
            Europe
          </li>
        </ul>
      </nav>

      {clicked ? <RxCross1 id='mobile' onClick={handleClick} /> : <RxHamburgerMenu id='mobile' onClick={handleClick} />}
    </header>
  );
}
export default Navbar;