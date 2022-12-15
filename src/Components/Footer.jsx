import React from 'react'
import './styles/footer.scss'
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className='footer-container'>
      <ul>
        <li><a href="https://www.linkedin.com/in/fabian-n-1ab288173/" target='_blank' ><BsLinkedin /></a> </li>
        <li><a href="https://github.com/Empyritz" target='_blank'><BsGithub /></a></li>
      </ul>
      <p>{`< Hecho con amor 🖤 />`}</p>
    </div>
  )
}

export default Footer