import React from 'react'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'> I'm <span className='introName'>Ricardo Padilla</span><br />Website Designer</span>
            <p className='introPara'>I am a skilled web designer with expereince in creating <br />visually appealing and user friendly websites.</p>
            <Link ><button className='btn'><img src='./images/portfolio.png' alt='portfolio' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src='./images/ricardo.png' alt='Profile' className='bg' />
    </section>
  )
}

export default Intro

