import React , {useState} from 'react'
import PropTypes from 'prop-types'
import data from './data'
function Lorem(props) {
    const [count , setCount] = useState(0)
    const [text , setText] = useState([])


    const handelsubmit = (e) => {
        e.preventDefault()
        let amount = parseInt(count)
        if( count <= 0){
            amount = 1
        } else if (count > 8) {
            amount = 8
        }
        setText(data.slice(0 , amount))
    }
    return (
        <div>
            <h1>Lorem</h1>
            <form onSubmit={handelsubmit}>
                <input onChange = {(e) => {setCount(e.target.value)}} type="number" name="amount" value = {count} id = "amount"/>
                <button type="submit">get</button>
           
            </form>


            <div>
                <p>Lorem i</p>
                {text.map((item , index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
        </div>
    )
}

Lorem.propTypes = {

}

export default Lorem

