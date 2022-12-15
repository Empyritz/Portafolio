import React from 'react'
import Skills  from './Skills'
import SkillsMob from './SkillsMobile'

const SkillValidator = () => {
  const screenWidth = window.innerWidth

  return (
    <>
      {screenWidth < 678 ? <SkillsMob /> : <Skills />}
    </>
  )
}

export default SkillValidator