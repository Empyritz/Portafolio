import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Projects from '../Components/Projects'
import SkillsValidator from '../Components/SkillValidator'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function Home (){
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsValidator /> 
      <Contact /> 
      <Footer />
    </>
  )
}

export default Home