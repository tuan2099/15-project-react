import React from 'react'
import PropTypes from 'prop-types'
import suvlinks from './data'
import links from './data'
import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './context'
function Sidebar(props) {

    const {isSidebarOpen , closeSidebar } = useGlobalContext()
    return (
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <div className = 'sidebar'>
                <button className = 'close-btn' onClick={closeSidebar}>
                    <FaTimes/>
                </button>
                <div className = 'sidebar=links'>
                    {suvlinks.map((suvlink , index) => {
                        const {links , page} = suvlink
                            return <article key={index}>
                                <h4>{page}</h4>
                                <div className = 'sidebar-sublinks'>
                                    {links.map((link , index) =>{
                                        const {url , icon, label} = link
                                        return <a key ={index} href={url}>{icon}{label}</a>
                                    })}
                                </div>
                            </article>

                    })}
                </div>
            </div>
        </aside>
    )
}

Sidebar.propTypes = {

}

export default Sidebar

