import React, { useState , useEffect } from 'react'
import PropTypes from 'prop-types'
import Loading from './loading'
import Tours from './tours'
const url = 'https://course-api.com/react-tours-project'



function Tour(props) {
    const [loading , setLoading] = useState(true)
    const [tour , setTour] = useState([])
    
    const fetchTours = async () => {
        setLoading(true)
        try{
            const responsive = await fetch(url);
            const tour = await responsive.json()
            setLoading(false)
            setTour(tour)
        } catch(e){
            setLoading(false)
            console.log(e)
        }

    
    }

    const remove = (id) => {
        const newTour = tour.filter((ttour) => ttour.id !== id)
        setTour(newTour)
        
    }

    useEffect(() => {
        fetchTours(true)
        
    }, [])
    
    if(loading) {
        return (
            <>
            <Loading/>
            </>
        )
    }
    
    return (


        <>
            <h1>Tour</h1>
            <Tours tour = {tour} remove = {remove}/>
        </>
    )
}

Tour.propTypes = {

}

export default Tour

