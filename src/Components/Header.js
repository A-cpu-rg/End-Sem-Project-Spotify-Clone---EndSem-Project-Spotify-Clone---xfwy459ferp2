import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="header">
        <img className='head-logo' src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg" alt="" />
        <div className='gap-2' style={{margin:"15px",backgroundColor:"black"}}>
        <Link to="/login" className='header-login'>Log in</Link>
        <Link to="/signup" className='header-signup'>Sign up</Link>
        </div>

        </div>

    </div>
  )
}

export default Header
