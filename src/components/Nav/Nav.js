import React, { useState } from 'react'
import "./Nav.css"
import amaicherry from "../../img/amaicherrylogo.png"
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Nav() {

  const [click, setClick ] = useState(false)
  const menuClick = () => setClick(!click)

  const IconStyle = {
    fontSize: "40px",
  };


  return (
    <nav className='nav-container'>
      <div className='nav-main'>
        <div onClick={menuClick} className='nav-btn'>
          <MenuIcon style={IconStyle} />
        </div>
        <Link className='nav-logo' to="/">
          <img src={amaicherry} alt={amaicherry} />
        </Link>
        <div className='nav-btn'>
          <SearchIcon style={IconStyle} />
        </div>
        <div className={click ? 'nav-slider clicked' : "nav-slider"}>
          <Link to={"/pymes"}>
            <p>Pymes</p>
          </Link>
          <h3>sadsad</h3>

          <h3>sadsad</h3>

          <h3>sadsad</h3>

        </div>
      </div>

    </nav>
  )
}

export default Nav