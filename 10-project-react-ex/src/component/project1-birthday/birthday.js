import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import data from './userBirthday'
import List from './list'
function Birthday(props) {
    const [people , setPeople] = useState(data)
    const clearusser = () => {
        setPeople([])
    }


    return (
        <>  
            <h4>{people.length} birthday in today</h4>
            <h1>Birthday</h1>
            <List people = {people}/>
            <button onClick={clearusser}>clear all user</button>
        </>
    )
}

Birthday.propTypes = {

}

export default Birthday

