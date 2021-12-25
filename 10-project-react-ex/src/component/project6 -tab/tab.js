import React , {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import './tab.css'
import { set } from 'date-fns/esm'

const url = 'https://course-api.com/react-tabs-project'
function Tab(props) {
    const [loading , setloading] = useState(true)
    const [job , setJob] = useState([])
    const [value , setValue] = useState(0)
    
    

    const fetchJob = async () => {
        const response = await fetch(url)
        const newJob = await response.json()
        setJob(newJob)
        setloading(false)
    }

    useEffect (() => {
        fetchJob()
    } , [])


    if(loading){
        return <div>loading...</div>
    }

    const {company , dates , duties , title} = job[value]


    return (
        <div>
            <h1>Tab</h1>
            
            <div>
                {job.map((item , index) => {
                    return <button onClick={() => {setValue(index)}} style={{margin : '30px'}} key={item.id}>{item.company}</button>
                })}
            </div>


            <div>{title}</div>
            <div>{company}</div>
            <div>{dates}</div>
            <div>{duties.map((dutie , index)=> {
                return <div key={index}>{dutie}</div>
            }) }</div>
        </div>
    )
}

Tab.propTypes = {

}

export default Tab

