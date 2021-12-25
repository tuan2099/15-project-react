import React from 'react'
import PropTypes from 'prop-types'

function Menu({items}) {
    return (
        <div>
            {items.map((item , index) =>{
                
                return <div key={index}>
                    <img src={item.img} alt={item.title} style = {{height: '200px' , width:'200px'}}/>
                    <div>{item.title}</div>
                    <div>{item.category}</div>
                    <div>{item.price}</div>
                    <div>{item.desc}</div>
                </div>
            })}
        </div>
    )
}

Menu.propTypes = {

}

export default Menu

