import React from 'react'


const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'> I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong oline presence. </span>
        <div className='worksImgs'>
            <img src='./images/cat-apple-laptop.webp' alt='cat-apple-laptop'  className='worksImg' />
            <img src='./images/cat-computer-bed.jpg' alt='cat-computer-bed'  className='worksImg' />
            <img src='./images/cat-laptop.jpg' alt='cat-laptop'  className='worksImg' />
            <img src='./images/cat-laptop2.jpg' alt='cat-laptop2'  className='worksImg' />
            <img src='./images/cats-playing-computer.jpg' alt='cats-playing-computer'  className='worksImg' />
            <img src='./images/black-cat-laptop.jpg' alt='back-cat-laptop'  className='worksImg' />
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works