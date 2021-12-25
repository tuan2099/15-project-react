import React , {useState} from 'react'
import PropTypes from 'prop-types'
import rgbToHex from './uitil'

function SingelColor({rgb , weight  , index , hexColor}) {
    const [alert , setAlert ] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
     return (
        <  >
            <div className={`color`} style = {{ color : `${index > 9 && 'white'}`,  backgroundColor : `rgb(${bcg})` , width : '200px' , height : '200px' , fontWeight : 'bold'}}>
                {weight}%
                <p style={{color : `${index > 9 && 'white'}`}}>#{hexColor}</p>
                
                </div>
           
        </>
    )
}

SingelColor.propTypes = {

}

export default SingelColor

