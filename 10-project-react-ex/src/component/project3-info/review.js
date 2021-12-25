import React, { useState } from 'react'
import PropTypes from 'prop-types'
import people from './data'
function Review(props) {

    const [index, setIndex] = useState(0)
    const {name,job,image,text} = people[index]
    
    const checknumber = (number) => {
        if(number> people.length -1 ){
            return 0
        } else if (number < 0){
            return  people.length -1
        }
        return number
    }

    const toleft = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checknumber(newIndex)
        })
    }
    const toright = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checknumber(newIndex)

        })
    }
    return (
        <div>
            
            <img src={image} alt={name} style={{width : '200px' , height : '200px'}}/>
            <div>{name}</div>
            <div>{job}</div>
            <div>{text}</div>

            <button onClick={toleft}>left</button>
            <button onClick={toright}>Right</button>
        </div>
    )
}

Review.propTypes = {

}

export default Review

