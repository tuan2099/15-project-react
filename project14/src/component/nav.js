import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Nav(props) {
    return (
        <nav className="navbar">
                <div className="nav-center">
                    <Link to="/">
                        <img src="https://raw.githubusercontent.com/john-smilga/react-projects/e44b541e002fca44db1e07b2d0a5275824f6d0e6/15-cocktails/setup/src/logo.svg" alt="" className = "logo"/>
                    </Link>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            
        </nav>
    )
}

Nav.propTypes = {

}

export default Nav

