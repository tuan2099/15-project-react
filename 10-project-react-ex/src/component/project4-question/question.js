import React , {useState} from 'react'
import PropTypes from 'prop-types'

function Question({title , info}) {

const [show , setShow] = useState(false)

const toggle = () => {
    setShow(!show)
}
    return (
        <div>
            <h3>{title}</h3>
            <button onClick={toggle}>{show ? 'hide' : 'show'}</button>

            {show && <p>{info}</p>}
        </div>
    )
}

Question.propTypes = {

}

export default Question

