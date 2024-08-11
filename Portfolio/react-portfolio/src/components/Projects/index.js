import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { faBootstrap, faGitAlt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import djangoLogo from '../../assets/images/django.png'
import pythonLogo from '../../assets/images/python.png'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            str={'Projects'}
            index={15}
            letterClass={letterClass}
          />
        </h1>
        
        <div className='project-link-wrapper'><a className='project-link' rel="noreferrer" href='https://github.com/SaadHusayn/commerce/' target='_blank'><div className='project'>E-Commerce Auctions App <span className='project-tech'> Django - Bootstrap - SQLite</span></div></a></div>
        <div className='project-link-wrapper'><a className='project-link' rel="noreferrer" href='https://saadhussain.netlify.app' target='_blank'><div className='project'>Professional Resume <span className='project-tech'> React - Bootstrap - CSS</span></div></a></div>
        <div className='project-link-wrapper'><a className='project-link' rel="noreferrer" href='https://github.com/SaadHusayn/quiz-game/' target='_blank'><div className='project'>Math Quiz Game <span className='project-tech'> React - CSS</span></div></a></div>
        <div className='project-link-wrapper'><a className='project-link' rel="noreferrer" href='https://github.com/SaadHusayn/mail/' target='_blank'><div className='project'>Mailing App <span className='project-tech'> Django - Javascript - REST APIs</span></div></a></div>
        <div className='project-link-wrapper'><a className='project-link' rel="noreferrer" href='https://github.com/SaadHusayn/search/' target='_blank'><div className='project'>Google Search Clone <span className='project-tech'> HTML - CSS - GET Requests</span></div></a></div>
        <div className='project-link-wrapper'><a className='project-link' rel="noreferrer" href='https://github.com/SaadHusayn/wiki/' target='_blank'><div className='project'>Encyclopedia App <span className='project-tech'> Django - Bootstrap - markdown2</span></div></a></div>
        <div className='project-link-wrapper'><a className='project-link' rel="noreferrer" href='https://saadb5.netlify.app/' target='_blank'><div className='project'>Design Template <span className='project-tech'> Bootstrap - ShapeDivider - Pixcap</span></div></a></div>

      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faReact} color='#1082A7' />
            </div>

            <div className='face2'>
                <img style={{"width":"100px"}} src={pythonLogo} alt='python' />
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
                <img style={{"width":"100px"}} src={djangoLogo} alt='django' />
            </div>
        </div>
      </div>
    </div>

    <Loader type='pacman' />
    </>
    
  )
}

export default Projects
