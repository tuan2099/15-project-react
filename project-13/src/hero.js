import React from 'react'
import PropTypes from 'prop-types'
import phoneImg from './image/phone.svg'
import {useGlobalContext} from './context'
function Hero(props) {
    const {closeSubmenu } = useGlobalContext()
    return (
        <section className = 'hero' onMouseOver={closeSubmenu}>
            <div className = 'hero-center'>
                <article className = 'hero-info'>
                    <h1>Payment infastructer for the internet</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <button className = 'btn'>Start</button>
                </article>
                <article className = 'hero-images'>
                    <img src = {phoneImg} className = 'phone-img' alt = 'dien thoai'/>
                </article>
            </div>
        </section>
    )
}

Hero.propTypes = {

}

export default Hero

