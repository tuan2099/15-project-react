import React from 'react'
import PropTypes from 'prop-types'
import Coctail from './coctail'
import Loading from './Loading'
import {useGlobalContext} from '../context'

function Coctailist(props) {
    const {coctails , loading} = useGlobalContext()

    if(loading){
        return <Loading/>
    } else  if(coctails.length < 1){
       return  ( <h2 className="section-title">
            no coctail
        </h2>)
    }

    return (
        <section className="section">
            <h2 className="section-title">coctails</h2>
            <div className="cocktails-center">
                {coctails.map((item, index) =>{
                        return <Coctail key={item.id} {...item}/>
                })}
                </div>            
        </section>
    )
}

Coctailist.propTypes = {

}

export default Coctailist

