import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faYoutube, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/" style={{"textDecoration":"none"}}>
      <img className="main-logo" src={LogoS} alt="logo" />
      <div className='logo-subt itle' >Saad</div>
    </Link>

    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          rel="norefferer"
          target="_blank"
          
          href="https://www.linkedin.com/in/saad-hussain-b55171203/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          rel="norefferer"
          target="_blank"
          href="https://github.com/saadhusayn"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a  rel="norefferer" target="_blank" href="https://wa.me/923142604066">
          <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          rel="norefferer"
          target="_blank"
          href="https://www.youtube.com/channel/UCYWFQjmsh7LJKgVQG2nxApQ"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
