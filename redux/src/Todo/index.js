
import { useReducer , useRef } from "react"
import reducer , {initialState} from './reducer'
import {addJob , setjob , removeJob , changetext} from './action'

function App() {
  

  const [state , dispatch] = useReducer(reducer , initialState);

  const {jobs , job , change} = state

  const inputRef = useRef()

  const handelSubmit = () => {
    dispatch(addJob(job)) // truyền input zô 
    inputRef.current.focus()
  }
  const handelchange = () => {
    dispatch(changetext(change))
  }
  
  return (
    <div className="App">
      <h1>top do by use reducer</h1>
      <input
        ref = {inputRef}
        value = {job }
        onChange={e => dispatch(setjob(e.target.value))}
      ></input>
      <button onClick={handelSubmit}>clickm me</button>


      <div>{change}</div>
      <button onClick = {handelchange}>clcik</button>

      <ul>
          {jobs.map((job , index ) => (
              <li  key = {index}>{job} 
               <button onClick = {() => dispatch(removeJob(index))}>clear</button></li>
             
           ))}
      
        
      </ul> 
    </div>
  );
}

export default App;
