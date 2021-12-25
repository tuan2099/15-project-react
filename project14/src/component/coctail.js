import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Coctail({image , name , id , info , glass}) {
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={image} alt = {name}/>
            </div>
            <div className = "cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`singlecoctai/${id}`} className = "btn btn-primary btn-detail" >detail</Link>
            </div>
        </article>
    )
}

Coctail.propTypes = {

}

export default Coctail

