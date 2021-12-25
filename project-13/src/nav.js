import React from 'react';
import logo from './image/logo.svg';
import PropTypes from 'prop-types';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from './context';
function Nav(props) {
    const  {openSidebar , openSubmenu , closeSubmenu} = useGlobalContext()

    const displaySubmenu = (e) => {
        const page =  e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom =  tempBtn.bottom - 3
        openSubmenu(page , {center , bottom})
    }
    

    const handelSubmenu = (e) => {
        if(!e.target.classList.contains('link-btn')){
            closeSubmenu()
        }
    }
    return (
        <nav className='nav'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img className ='nav-logo' src = {logo} alt='ảnh'/> 
                    <button className='btn toggle-btn' onClick={openSidebar}><FaBars/></button>
                </div>
                <ul className='nav-links'>
                    <li><button className='link-btn' onMouseOver = {displaySubmenu}>products</button></li>
                    <li><button className='link-btn' onMouseOver = {displaySubmenu}>company</button></li>
                    {/* <li><button className='link-btn' onMouseOver = {displaySubmenu}>developer</button></li> */}
                </ul>
                <button className = 'btn sign-btn'>Sign-in</button>
            </div>

        </nav>
    )
}

Nav.propTypes = {

}

export default Nav

