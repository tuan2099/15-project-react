import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading , setLoading] = useState(true)
  const [search , setSearch] = useState('a')
  const [coctails , setCoctail] = useState([])


  const fetchDrink = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${search}`)
      const data = await response.json()
      const {drinks} = data
      if(drinks){
          const newCoctail = drinks.map((item , index) =>{
              const {idDrink , strDrink , strDrinkThumb , strAlcoholic , strGlass} = item;
              return {id:idDrink , name : strDrink , image : strDrinkThumb , info:strAlcoholic , glass : strGlass}
          })
          setCoctail(newCoctail)
      }else{
        setCoctail([])
      }
      setLoading(false)
    } catch (error) {
        console.log(error)
      setLoading(false)

    }
  }

    useEffect(() => {
      fetchDrink()
    },[search])


  return <AppContext.Provider value={{
    loading ,

    coctails,
    setSearch
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }