import React from 'react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import './styles/arrowButton.scss'


const ArrowButton = ({direction, id}) => {
  const navigate = useNavigate()

  const validateSide = (id) => {
    if(direction === 'left'){
      return id - 1
    }else{
      return id + 1
    }
  }

  const handleChangeProject = () => {
    const nextProject = validateSide(id)
    navigate(`/project/${nextProject}`)
  }
  
  return (
    <div className={`arrow-container ${direction}`} onClick={handleChangeProject}> 
      {direction === 'left' ? <BsFillArrowLeftSquareFill /> : <BsFillArrowRightSquareFill />}
    </div>
  )
}

export default ArrowButton