import React from 'react';
import '../style/App.css';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to ="/">
                    <li>Home</li>
                </Link>

                <Link to ="/heroes">
                    <li>Heroes</li>
                </Link>

                <Link to ="/search">
                    <li>Search</li>
                </Link>
                <Link to ="/newHero">
                    <li>New Hero</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
