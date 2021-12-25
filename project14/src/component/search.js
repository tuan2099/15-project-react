import React , {useRef} from 'react'
import PropTypes from 'prop-types'
import {useGlobalContext} from '../context'
function Search(props) {
    const {setSearch} = useGlobalContext()
    const searchValue = React.useRef('');


    React.useEffect(() => {
        searchValue.current.focus()
    } , [])

    const searchform = () => {
        setSearch(searchValue.current.value)
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        
    }
    return (
        <section className ="section search" >
            <form className = 'search-form' onSubmit={handelSubmit}>
                <div className = 'form-control'>
                    <label htmlFor = "name">Tìm kiếm </label>
                    <input type="text" id = 'name' placeholder = 'Name' ref={searchValue} onChange={searchform}/>
                </div>
            </form>
        </section >
    )
}

Search.propTypes = {

}

export default Search

