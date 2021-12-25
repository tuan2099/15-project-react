import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {AppContext , useGlobalContext} from './context'
const Home = () => {

  const {openmodal , opensidebar} = useGlobalContext()
  




  return <main>
      <button className="sidebar-toggle " onClick={opensidebar}>
          <FaBars/>

      </button>
      <button className="btn" onClick={   openmodal}>show modal</button>  
    </main>
}

export default Home