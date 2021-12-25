import React from 'react'
import PropTypes from 'prop-types'
import Todoapp from './Todo'
import Context from './component/context'


import {useContext } from 'react'
import {ThemeContext} from './thmeecontext'







function App(props) {

   const context = useContext(ThemeContext)

    return (
        <>
            <Todoapp/>
                <button onClick = {context.handelChangtheme}>Toggle</button>
            <Context />
        </>
    )
}

App.propTypes = {

}

export default App



