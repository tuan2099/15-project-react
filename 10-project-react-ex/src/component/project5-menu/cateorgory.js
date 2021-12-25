import React from 'react'
import PropTypes from 'prop-types'

function Cateorgory({filterItem}) {
    return (
        <div>
            <button onClick={() => filterItem('all')}>all</button>
            <button onClick={() => filterItem('shakes')}>shakes</button>
            <button onClick={() => filterItem('breakfast')}>breakfast</button>
            <button onClick={() => filterItem('lunch')}>lunch</button>
            

        </div>
    )
}

Cateorgory.propTypes = {

}

export default Cateorgory

