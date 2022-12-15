import React from 'react'
// import rose from '../assets/galaxy-rose.gif'
// import nebula from '../assets/galaxy-nebula.gif'
import './styles/hero.scss'

function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero-nebula' />
      {/* <img src={rose} alt="rose" /> */}
      <h2>"
The development of man depends fundamentally on invention. It is the most important product of his creative brain".</h2>
      <p> - Nikola Tesla.</p>
      {/* <img src={nebula} alt="nebula" /> */}
    </div>
  )
}

export default Hero