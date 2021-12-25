import React , {useState , useEffect , useRef}from 'react'
import {FaBars , FaTwitter  } from 'react-icons/fa'
import PropTypes from 'prop-types'
import {links , social } from './data'
function Navbar(props) {

    const [showLink , setShowLink] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const togglebutton = ()  => {
        setShowLink(!showLink)
    }

    useEffect(()=> {
        const linkheigth = linksRef.current.getBoundingClientRect().height
        if(showLink) {
            linksContainerRef.current.style.height =`${linkheigth}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    } , [showLink])

    return (
        <div>
            <div className="nav-center">
                <div className = 'nav-header'>
                    <img src ='' alt = 'logo'/>
                    <button onClick={togglebutton} className = 'nav-toggle' >
                        <FaBars/>
                    </button>
                </div>


           
                 <div className = {`${showLink?'links-container show-container ' :'links-container ' }`}  ref={linksContainerRef}>
                 <ul className = 'links' ref= {linksRef}>
                     {links.map((link , index)=> {
                         const {ỉd, url , text } = link
                         return <li key={index}>
                             <a href = {url}>{text}</a>
                         </li>
                     })}
                    
                 </ul>
             </div>
               
                <ul className = 'social-icons'>
                       
                           {social.map((socialIcon) => {
                               const {id, url , icon } = socialIcon;
                               return <li key = {id}>
                                   <a href={url} > {icon}</a>
                               </li>
                           })}
                       
                </ul>
            </div>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar

