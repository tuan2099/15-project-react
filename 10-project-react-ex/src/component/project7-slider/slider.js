import React , {useState , useEffect }from 'react'
import PropTypes from 'prop-types'
import data from './data'
//import './slider.css'
import { set } from 'date-fns'
function Slider(props) {
    const [people , setPeople] = useState(data)
    const [index , setIndex ] = useState(0)

    useEffect (()=> {
        const lastIndex = people.length -1; 
        if(index < 0 ) {
            setIndex(lastIndex)
        } else if (index > lastIndex) {
            setIndex(0)
        }
    } ,[index , people])
    useEffect (()=> {
      let slider =   setInterval(()=>{
            setIndex(index + 1)
        } , 3000);
        return () => clearInterval(slider);
    }, [index])
    return (
        <section className = 'section'>
        <div className = 'title'>
            
        
            <h1>Slider1</h1>
            
        

        </div>
        <div className='section-center'>
            
                 {people.map((person , Persionindex) => {
                     const {id , name , image , title , quote} = person;
                     let position = 'nextSlide'
                     if(Persionindex === index) {
                         position = 'activeSlide'
                     } 
                     if(Persionindex === index -1 || ( index === 0 && Persionindex === people.length -1)) {
                         position = 'lastSlide'
                     }
                     return <article className={position}  key = {Persionindex}>
                         <h4>{name}</h4>
                         <img className = 'person-img' src = {image}/>
                         <div className ='title'>{title}</div>
                         <div className ='quote'>quote</div>
                         
                     </article>
                 })}
                 <button onClick={() => setIndex(index - 1)} className = 'prev'>pre</button>
                 <button onClick={() => setIndex(index + 1)} className = 'next'>next</button>
            </div>
        </section>
    )
}

Slider.propTypes = {

}

export default Slider

 