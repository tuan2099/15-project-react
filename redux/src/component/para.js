import React from 'react'
import PropTypes from 'prop-types'


import {useContext } from 'react'
import {ThemeContext} from '../thmeecontext'

function Para(props) {
    const context = useContext(ThemeContext)
    console.log(context)
    return (
        

        <div>
            {context.theme}
            ngu thế 
        </div>
    )
}

Para.propTypes = {

}

export default Para

