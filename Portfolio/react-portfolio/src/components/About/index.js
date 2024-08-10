import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { faBootstrap, faCss3, faGitAlt, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            str={'Projects'}
            index={15}
            letterClass={letterClass}
          />
        </h1>

        <p>Hi, I'm Saad Hussain, a sophomore Computer Science student at FAST NUCES with three years of programming experience, including one year in full-stack web development using Django and React. My skills include Django, React, Bootstrap, JS, Python, C/C++, Git, and GitHub. I've been a finalist in Coders Cup '23 and a silver medalist in my first semester.</p>

        <p>Beyond academics, I enjoy learning about history, playing video games, and chess. My notable projects include an E-commerce auctions app built with Django and an Arithmetic game using ReactJS. I believe in learning from others and teaching in return.</p>
        <p>I aim to add value through my skills in dynamic and creative work environments. I'm excited about future projects and collaborations. Feel free to connect with me on <a className='about-me-link' href='https://www.linkedin.com/in/saad-hussain-b55171203/'>LinkedIn</a>  or <a className='about-me-link' href='https://wa.me/923142604066'>WhatsApp</a>. Thank you for visiting my portfolio!</p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faReact} color='#1082A7' />
            </div>

            <div className='face2'>
                <FontAwesomeIcon icon={faPython} color='#FFC30F' />
            </div>

            <div className='face3'>
                <FontAwesomeIcon icon={faBootstrap} color='#8B19FE' />
            </div>

            <div className='face4'>
                <FontAwesomeIcon icon={faGitAlt} color='#F05539' />
            </div>

            <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color='#F7E025' />
            </div>

            <div className='face6'>
                <FontAwesomeIcon icon={faCss3} color='#2D53E5' />
            </div>
        </div>
      </div>
    </div>

    <Loader type='pacman' />
    </>
    
  )
}

export default About
