import React from 'react'
import skillsApi from '../api/skills-api.js'
import './styles/skill.scss'

const Skills = () => {
  // const porcentageRef = useRef()

  const isEven = (number) => {
    if(number % 2 === 0){
      return true
    }
    else {
      return false
    }
  }
  
  const handleHover = (e, porcentage) => {
    e.target.textContent = `${porcentage}%`
  }
  const handleLeave = (e) => {
    e.target.textContent = ''
  }

  const skillsList = skillsApi.map((skill, index) => {
    const even = isEven(index + 1)
    return (
      <div key={index} className={`skill-container ${even ? 'skill-right' : 'skill-left'}`}>
        <h3 className='skill-name' >{skill.name}</h3>
        {skillsApi.length - 1 === index ? '' :<div className='tube'></div>}
        <div className='circle' onMouseOver={(e) => handleHover(e, skill.porcenatge)} onMouseLeave={handleLeave}></div>
      </div>
    )
  })

  return (
    <section id='skills' className='skills-section'>
      <h1 className='skills-title'>Skills</h1>
      {skillsList}
    </section>
  )
}

export default Skills