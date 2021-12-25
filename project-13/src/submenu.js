import React , {useState , useRef , useEffect} from 'react'
import PropTypes from 'prop-types'
import {useGlobalContext} from './context'

function Submenu() {
    const {isModalOpen , location , page:{ page , links }} = useGlobalContext()
    const [colum , setColum] = useState('col-2')
    const container = useRef(null)
    useEffect(() => {
        setColum('col-2')
        const submenu = container.current
        const { center , bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px `

        if(links.length ===3 ) {
            setColum('col-3')
        } else if(links.length > 3 ) { 
            setColum('col-4')
        }
    } ,[location , links])
    return (
        <aside className={`${isModalOpen ? 'submenu show': 'submenu'}`} ref={container}>
         <h4>{page}</h4>
         <div className = {`submenu-center ${colum}` }>
             {links.map((link , index ) => {
                 const {label , url , icon} = link;
                 return <a  key={index} href={url}>{label}</a>

               
             })}
         </div>
        </aside>
    )
}

Submenu.propTypes = {

}

export default Submenu

