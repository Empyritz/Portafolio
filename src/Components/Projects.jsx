import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectsList } from '../api/projects'
import './styles/projects.scss'
// import Loader from 'react-loaders'



function Projects() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const projectsRef = useRef()
  const hoverRightRef = useRef() 
  const hoverLeftRef = useRef() 
  const [hoverRight, setHoverRight] = useState(false)
  const [hoverLeft, setHoverLeft] = useState(false)
  
  const handleProjectClick = (id) => {
    navigate(`project/${id}`)
  }

  const projectsMap = projectsList.map((project, index) => {
    let transformCount = 0;
    transformCount++
    return (
      <div key={index} className={`project-container transform-${index}`} style={{ transform: `${transformCount}00` }}>
        <div className='project-image-container'>
          {project.images.map((image, index) => {
            return (
              <img key={index} src={image} alt={image} onClick={() => handleProjectClick(project.id)} />
              )
          })}
        </div>
        <div className='project-descrpition'>
          <h4>{project.title}</h4>
        </div>
      </div>
    )
  })

  const handleScrollForNavs = (e) => {
    const scrolled = projectsRef.current.scrollLeft
    const width = projectsRef.current.clientWidth
    const scrollWidth = projectsRef.current.scrollWidth - width
    const hoverMoveLeft = scrolled + 23
    const hoverMoveRight = scrolled
    if(projectsRef.current.clientWidth > 768){
      if(scrolled !== 0){
        hoverLeftRef.current.style.display = 'block'
      }else{
        hoverLeftRef.current.style.display = 'none'
      }
      if((scrolled + 10) >= scrollWidth){
        hoverRightRef.current.style.display = 'none'
      }else{
        hoverRightRef.current.style.display = 'block'
      }
      hoverRightRef.current.style.left = `calc(80vw + ${hoverMoveRight}px`
      hoverLeftRef.current.style.left = `${hoverMoveLeft}px`
    }else{
      // console.log('menos')
      hoverLeftRef.current.style.display = 'none'
      hoverRightRef.current.style.display = 'none'
    }
  }
  // ------ ScrollNavb right
  useEffect(() => {
    let count = 0;
    if(!isLoading){
      const scrolled = projectsRef.current.scrollLeft
      if(hoverRight){
        var hoverIntervalRight = setInterval(() => {
          let scrollLeft = count * 25 + scrolled
          count++
          projectsRef.current.scrollTo({left: scrollLeft, behaviour: 'smoth'})
        }, 10)
      }
    }

    return(() => {
      clearInterval(hoverIntervalRight)
      count = 0
    })
  }, [hoverRight])
  const handleHoverRight = (e) => {
    setHoverRight(true)
  }
  const handleHoverLeaveRight = (e) => {
    setHoverRight(false)
  }

  // ------ ScrollNavb left
  useEffect(() => {
    let count = 0;
    if(!isLoading){
      const scrolled = projectsRef.current.scrollLeft
      if(hoverLeft){
        // alert('aqui andamos')
        var hoverIntervalLeft = setInterval(() => {
          count++
          let scrolledLeft = scrolled - (count * 25)
          projectsRef.current.scrollTo({left: scrolledLeft, behaviour: 'smoth'})
        }, 10)
      }
    }
    return (() => {
      clearInterval(hoverIntervalLeft)
      count = 0
    })
  }, [hoverLeft])
  const handleHoverLeft = () => {
    setHoverLeft(true)
  }
  const handleHoverLeaveLeft = () => {
    setHoverLeft(false)
  } 

  useEffect(() => {
    setIsLoading(false)
  }, [])
  

  return (
    <section id='projects' className='projects-section'>
      <h1 className='projects-title'>Projects</h1>
      <div  className='projects-container' ref={projectsRef} onScroll={handleScrollForNavs}>
        <div className='projects-carroussell'>{projectsMap}</div>
        <div className='hover-right' ref={hoverRightRef} onMouseOver={handleHoverRight} onMouseLeave={handleHoverLeaveRight} />
        <div className='hover-left' ref={hoverLeftRef} onMouseOver={handleHoverLeft} onMouseLeave={handleHoverLeaveLeft} />
      </div>
    </section>
  )
} 

export default Projects