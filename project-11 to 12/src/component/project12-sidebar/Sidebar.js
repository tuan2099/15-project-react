import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {

  const {isSidebarOpen , closeSidebar} = useGlobalContext()



  return <aside className = {`${isSidebarOpen ? 'show-sidebar sidebar':'sidebar'} `}>
    <div className = 'sidebar-header'>

        <img src='' className = 'logo'alt = 'logo ở đây'></img>
        <button className = 'close-btn' onClick={closeSidebar}>
          <FaTimes/>
        </button>
    </div>

        <ul className = 'links'>
          {links.map((link , index)=> {
              const {id , url , text , icon} = link;
              return <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li> 
          })}
        </ul>

        <ul className = 'social-icons'>
          {social.map((socialicon , index) => {
            const {id , url , icon} = socialicon
              return <li key={id}>
                <a href={url}>{icon}</a>
              </li>
          })}
        </ul>
  </aside>
}

export default Sidebar