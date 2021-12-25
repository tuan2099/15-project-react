import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Tours({tour , remove}) {
    
    const [redmorre , setReadmore] = useState(false)

    const add = () => {
        setReadmore(!redmorre) 
    }

    

    return (
        <div>
            {tour.map((tourr , index ) => (
                <div key={index}>
                    <div>{tourr.name}</div>
                  
                    <div>{tourr.price}</div>
                    <div>{redmorre?tourr.info:`${tourr.info.substring(0 , 200)}...`
                    }
                    <button onClick={add}> {redmorre?'hide' : 'readmore' }</button>
                    </div>
                    <img src={tourr.image} style = {{width: '200px' , height: ' 200px'}}></img>
                    <button onClick = {() => remove(tourr.id)}> clear tour </button>
                </div>
                
            ))}
        </div>
    )
}

Tours.propTypes = {

}

export default Tours

