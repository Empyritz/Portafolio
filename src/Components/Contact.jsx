import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './styles/contact.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const formRef = useRef()

  const toastOptions = {
    position: 'top-right',
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  }

  const configuration = {
    serviceId: 'service_5t84kb4',
    templateId: 'template_j1oytji',
    form: formRef.current,
    publicKey: 'jb-eyXnVKVhPnSrn5'
  }

  const sendEmail = (e) => {
    e.preventDefault()
    
    const {serviceId, templateId, publicKey} = configuration

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        console.log('Email send successfully')
        toast.success('Email send successfullu', toastOptions)  
        for (let i = 0; i<4; i++){
          e.target[i].value = ''
        }      
      })
      .catch((error) => {
        console.log(error)
        toast.error('Email send successfullu', toastOptions)        
      })
      

  }

  return (
    <div id='contact' className='form-container'>
      <h1>Contact Me</h1>
      <form ref={formRef} className='form' onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Name' required className='name'/>
        <input type="email" name='email' placeholder='Email' required className='email'/>
        <input type="text" name='subject' placeholder='Subject' required className='subject'/>
        <textarea name='message' placeholder='Message' required className='message'/>
        <button type='submit' className='button-submit'>Send</button>
      </form>
      <ToastContainer />
    </div>
  )
} 

export default Contact