import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

function Header() {
    
  return (
    <div className="Navi">
        <nav className="nav1">
            <h3>PhdRanking</h3>
            <ul className="nav1-links">
                <Link className="link1" to= '/about'>
                    <li><b>What is PhdRanking?</b></li>
                </Link>
                <Link className="link3" to='/'>
                    <li>Home</li>
                </Link>
                <Link className="link4" to='/team'>
                    <li><b><i>Meet the Team</i></b></li>
                </Link>
                <Link className="link2" to='/login'>
                    <li className="navA"><b>Log in / Sign Up</b></li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
