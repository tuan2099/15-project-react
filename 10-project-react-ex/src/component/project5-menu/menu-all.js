import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Category from './cateorgory'
import Menu from './menu'
import items from './data'
function Menuall(props) {
    const [menuItems , setMenuItem] = useState(items)
    const [cateorgory , setCategory] = useState([])
    const filterItem = (category) => {
        if(category === 'all') {
            setMenuItem(items)
            return 
        }
        const newitem = items.filter((item) => item.category === category)
        setMenuItem(newitem)
    }
    return (
        <div>
            <h1>Menu - fliter</h1>
            <Category filterItem = {filterItem}/>
            <Menu items = {menuItems}/>        
        </div>
    )
}

Menuall.propTypes = {

}

export default Menuall

