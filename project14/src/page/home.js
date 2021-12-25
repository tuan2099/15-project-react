import React from 'react'
import PropTypes from 'prop-types'
import Coctailist from '../component/coctailist'
import Search from '../component/search'
function Home(props) {
    return (
        <main>
            <Search/>
            <Coctailist/>
        </main>
    )
}

Home.propTypes = {

}

export default Home

