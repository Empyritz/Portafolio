import React from 'react'
import skilssApi from '../api/skills-api'
import './styles/skillsMobile.scss'

const SkillsMob = () => {
   
  const skillsList = skilssApi.map((skill, index) => {
    return (
      <div key={index} data-porcentage={`${skill.porcenatge}`} className='skill-mobile-c'>
        <p >{skill.name}</p>
      </div>
    )
  })

  return (
    <>
      <section id='skills' className='skills-mobile-section'>
        <h1>Skills</h1>
        <div className='skills-tags'>
          {skillsList}
        </div>
      </section>
    </>
  )
}

export default SkillsMob