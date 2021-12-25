import React , {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import Values from 'values.js'
import SingelColor  from './singelColor'
function Color(props) {

    const [color , setColor] = useState('')
    const [err , setError] = useState(false)
    const [list , setList] = useState(new Values('#f15025').all(10))


    const handelSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
            console.log(colors)
        } catch (error) {
            setError(true)
            console.log(error)
        }
        
        
    }

    return (
        <>
            <h1>Color-genderator</h1>
            <form onSubmit={handelSubmit}>
                <input values = {color} placeholder = "your text" onChange={(e) => setColor(e.target.value)}  type="text" />
                <button type = "button">Submit</button>
            </form>
            <section style = {{display : 'flex' , 'flexWrap': 'wrap'}}>
                
                {list.map((color , index) => {
                    const hex = color.hex
                    return <SingelColor hexColor = {color.hex} style = {{display : 'flex'}} key = {index}  {...color} index = {index} />
                })}
            </section>
        </>
    )
}

Color.propTypes = {

}

export default Color

