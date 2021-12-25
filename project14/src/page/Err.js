import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Err(props) {
    return (
        <section className = 'error-page section'>
                <div className = 'error-container'>
                    <h1>Lỗi ...............</h1>
                    <Link to = '/' className = 'btn btn-primary'>Back</Link>
                </div>
        </section>
    )
}

Err.propTypes = {

}

export default Err

