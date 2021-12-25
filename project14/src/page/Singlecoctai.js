import React  from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import Loading from '../component/Loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
function Singlecoctai(props) {

    const {id} = useParams()
    const [loading , setLoading] = React.useState(false)
    const [cocktail , setCoctail] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        async function getCoctail() {
            try {
                const response = await fetch(`${url}${id}`)
                const data = await response.json()
                if(data.drinks){
                    const {strDrink : name ,
                            strDrinkThumb: image ,
                            strAlcoholic : info,
                            strCategory : category,
                            strGlasse : glass,
                            strIntruction : intructions,
                            strIngredient1 , strIngredient2,strIngredient3,strIngredient4,strIngredient5
                        
                    }  = data.drinks[0]
                    const ingredients = [strIngredient1 , strIngredient2,strIngredient3,strIngredient4,strIngredient5]
                    const newCocktail = {name , image , info , category , glass , intructions , ingredients}
                    setCoctail(newCocktail)
                }else{
                    setCoctail(null)
                }
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getCoctail()
    } , [id])

    if(loading) {
        return <Loading/>
    }
    if(!cocktail){
        return <h2 className="section-title">no cocktail</h2>
    }

    const {name , image , info , category , glass , intructions , ingredients} = cocktail
    return (
        <section className="section cocktail-section">
            <Link to='/' className="btn btn-primary">Back home</Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={image} alt={name}/>
                <div className="drink-info">
                    <p><span className="drink-data">name : </span>{name}</p>
                    <p><span className="drink-data">category : </span>{category}</p>
                    <p><span className="drink-data">info : </span>{info}</p>
                    <p><span className="drink-data">glass : </span>{glass}</p>
                    <p><span className="drink-data">intructions : </span>{intructions}</p>
                    <p><span className="drink-data">intructions : </span>{
                        ingredients.map((item , index) => {
                            return item?<span key={index} >{item}</span> : null;
                        })
                    }</p>
                </div>
            </div>
        </section >
    )
}

Singlecoctai.propTypes = {

}

export default Singlecoctai

