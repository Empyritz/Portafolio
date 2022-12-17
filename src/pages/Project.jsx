/* eslint-disable react/jsx-no-target-blank */
import React, { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowButton from '../Components/ArrowsButton'
import { projectsList } from '../api/projects'
import './styles/project.scss'
import Particles from 'react-tsparticles'
import particlesConfig from './config/particles.json'
import { loadFull } from "tsparticles";
import { RiHomeLine } from 'react-icons/ri'

const Project = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const parseID = parseInt(id)
  const currentProject = projectsList.find((project) => project.id === Number(id))
  const { images, title, description, libraries } = currentProject

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container)
  }, [])

  const handleBackClick = () => {
    navigate('/')
  }

  console.log(id)
  return (
    <div className='project'>
      <div  className='button-back' onClick={handleBackClick}><RiHomeLine /></div>
      <div className='image-c'>
        <img src={images[0]} alt="" />
      </div>
      <div className='info-c'>
          <h2>{title}</h2>
          <div className='info'>
            <div className='description'>
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            <div className='libraries'>
              <h3>Libraries </h3>
              <ul>
                {libraries.map((lib) => {
                  return (
                    <li>{lib}</li>
                    )
                  })}
              </ul>
            </div>
          </div>
      </div>
      <div className='link'><a href={currentProject.source} target='_blank' >Source code</a></div>
      <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={particlesConfig} />
      {parseID !== 1 && <ArrowButton direction='left' id={parseID}/>}
      {parseID !== projectsList.length && <ArrowButton direction='right' id={parseID}/>}
    </div>  
  )
  
}

export default Project