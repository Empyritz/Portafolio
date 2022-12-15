import React, { useCallback, useEffect, useRef, useState } from 'react'
import './styles/navBar.scss' 
import Particles from 'react-tsparticles'
import particlesConfig from './config/particlesConfig'
import { loadFull } from "tsparticles";
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import gsap from 'gsap-trial'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaBars } from 'react-icons/fa'

function Navbar (){
  const [openNav, setOpenNav] = useState(false)
  const outlineLogoRef = useRef()
  const logoContainerRef = useRef() 
  const burguerRef = useRef()
  const listRef = useRef()

  const aboutRef = useRef()
  const projectsRef = useRef() 
  const skillsRef = useRef() 
  const contactRef = useRef() 

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(async (container) => {
  }, [])

  useEffect(() => {
    aboutRef.current = document.getElementById('about')?.getBoundingClientRect().y
    projectsRef.current = document.getElementById('projects')?.getBoundingClientRect().y
    skillsRef.current = document.getElementById('skills')?.getBoundingClientRect().y
    contactRef.current = document.getElementById('contact')?.getBoundingClientRect().y
  }, [])

  // useEffect(() => {
  //   let tl = gsap.timeline()
  //   gsap.registerPlugin(DrawSVGPlugin)
  //   tl.fromTo(outlineLogoRef.current, {
  //     drawSVG: '0'
  //   },
  //   {
  //     duration: 2.3,
  //     drawSVG:  '100%', 
  //   })

  // }, [])

  useEffect(() => {
    const linksHeight = listRef.current.getBoundingClientRect().height
    if(openNav){
      burguerRef.current.style.height = `${linksHeight}px`
    }else{
      burguerRef.current.style.height = '0'
    }
  }, [openNav])

  const handleOpenNav = () => {
    setOpenNav(prev => !prev)
  }

  const handleClickMenu = (element) => {
    if(element === 'about'){
      window.scrollTo(0, aboutRef.current)
    }else if(element === 'projects'){
      window.scrollTo(0, projectsRef.current)
    }else if(element === 'skills'){
      window.scrollTo(0, skillsRef.current)
    }else if(element === 'contact'){
      window.scrollTo(0, contactRef.current)
    }
  }

  return (
    <div className='navbar-container'>
      <div className='logo-container'>
          <svg ref={logoContainerRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151.33 135">
            <title>eFE</title>
            <g id="Layer_2" data-name="Layer 2" className='svg-container'>
              <path ref={outlineLogoRef} className="cls-1" d="M.75,128,39,11.6A16.15,16.15,0,0,1,54.3.5H142a8.77,8.77,0,0,1,8,12.37l-1.1,2.46a8.77,8.77,0,0,1-8,5.17H66.41a10.83,10.83,0,0,0-10.27,7.4L51.72,41.17a4.81,4.81,0,0,0,4.56,6.33H89.75A7.14,7.14,0,0,1,96.06,58h0A12.25,12.25,0,0,1,85.23,64.5h-35a7.74,7.74,0,0,0-7.36,5.33L22.73,131.08A5,5,0,0,1,18,134.5H5.48A5,5,0,0,1,.75,128Z"/>
            </g>
          </svg>
        <h2><i>abian Dev</i></h2>
        <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={particlesConfig} />
      </div>
      <div className='navbar-list'>
        <ul>
          <li onClick={()=>handleClickMenu('about')}>About</li>
          <li onClick={()=>handleClickMenu('projects')}>Projects</li>
          <li onClick={()=>handleClickMenu('skills')}>Skills</li>
          <li onClick={()=>handleClickMenu('contact')}>Contact</li>
        </ul>
      </div>
      <div className='nav-burguer-container'>
        <div className='burguer' onClick={handleOpenNav}>{openNav ? <FaBars /> : <GiHamburgerMenu/>}</div>
        <div className='links-container' ref={burguerRef}>
          <ul ref={listRef}>
            <li onClick={()=>handleClickMenu('about')}>About</li>
            <li onClick={()=>handleClickMenu('projects')}>Projects</li>
            <li onClick={()=>handleClickMenu('skills')}>Skills</li>
            <li onClick={()=>handleClickMenu('contact')}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
        
  )
}

export default Navbar