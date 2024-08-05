import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');



  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> <AnimatedLetters letterClass={letterClass} str={"I'm"} index={12} />
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass} str={'aad'} index={15} />  
          <br />
          <AnimatedLetters letterClass={letterClass} str={"web developer"} index={22} />
        </h1>
        <h2>Full Stack Developer / Python Expert / CS Student</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
