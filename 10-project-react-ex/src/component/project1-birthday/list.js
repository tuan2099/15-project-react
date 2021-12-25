import React from 'react'
import PropTypes from 'prop-types'

function List({people}) {
    return (


        <>
           <h2>List cpn</h2> 
           <ul>
               {people.map((peoples , index) => (
                   <li key={index}>{peoples.name}</li>
               ))}
           </ul>
        </>
    )
}

List.propTypes = {

}

export default List

