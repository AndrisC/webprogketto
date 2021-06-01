import React from 'react';
import '../style/Nav.css';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to ="/">
                    <li><span>Home</span></li>
                </Link>

                <Link to ="/heroes">
                    <li><span>Heroes</span></li>
                </Link>

                <Link to ="/search">
                    <li><span>Search</span></li>
                </Link>
                <Link to ="/newHero">
                    <li><span>New Hero</span></li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
