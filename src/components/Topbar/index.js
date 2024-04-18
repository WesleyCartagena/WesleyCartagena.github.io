import './index.scss'
import LogoW from '../../assets/images/W.png'
import LogoSubtitle from '../../assets/images/cartagena.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser,faDiagramProject} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Topbar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to = '/'>
                <img className="letter-logo" src={LogoW} alt="Logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="Cartagena"/>
            </Link>
            <nav>
                <NavLink className="nav-links"  exact="true" activeclassname="active" id="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink className="nav-links"  exact="true" activeclassname="active" id="about-link" to="about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink className="nav-links"  exact="true" activeclassname="active" id="contact-link" to="contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
                <NavLink className="nav-links" exact="true" activeclassname="active" id="project-link" to="Projects">
                    <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <div className="Social-List">
            <ul id="horizontal-list">
                <li>
                    <a id="linkedin"
                        href="https://www.linkedin.com/in/wesley-cartagena-870603126/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                
                <li>
                    <a id="github"
                        href="https://github.com/wesleycartagena"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            </div>
        </div>
    ) 
}
export default Topbar