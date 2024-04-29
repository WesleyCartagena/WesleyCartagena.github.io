import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,faPython,faCss3,faJsSquare,faShopify,faReact,faGit,faJira } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const[letterClass,setLetterClass]= useState('text-animate')
    const aboutArray = ['A','b','o','u','t', ' ', 'm','e']
    const techStackArray = ['Technology',' ', 'Stack']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout()
    }, []);
    return(
        <div className ='about-page-container d-flex flex-column text-center align-items-center justify-content-center'>
                <div className='about-text' id="about-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={aboutArray} 
                            idx={7}
                        />
                    </h1>
                    <p>Hi, I'm Wesley Cartagena. I am a Software Developer and tech enthusiast that has a passion for building, creating and learning new things. My love for software development has given me the opportunity to use code to build and create new and interesting projects.</p>
                    <p>My software journey started when I joined an organization called All Star Code. At ASC I learned how to code and created my first game which was a recreation of Space Invaders. I then created a model house called BSW that was controlled through a front end website. I later presented my projects to staff at Goldman Sachs. The day I presented my projects was the day I realized I wanted to be a Software Developer. </p>
                    <p>My experience at ASC led me to major in Computer Science at SUNY New Paltz. It was a long tough journey but my love for software never waivered. </p>
                    <p>Today I work as an IT Developer using code to help drive business solutions. </p>
                
                </div>
                <div className="about-tech-stack" id="tech-stack">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={techStackArray} 
                            idx={15}
                        />
                    </h1>
                        <div className="icons">
                        <FontAwesomeIcon icon={faHtml5} color="#FF5733" />
                        </div>
  
                        <div className="icons">
                        <FontAwesomeIcon icon={faCss3} color="#264de4" />
                        </div>

                        <div className="icons">
                        <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />
                        </div>
             
                        <div className="icons">
                        <FontAwesomeIcon icon={faReact} color="#61DBFB" />
                        </div>
            
                        <div className="icons">
                        <FontAwesomeIcon icon={faPython} color="#306998" />
                        </div>
              
                        <div className="icons">
                        <FontAwesomeIcon icon={faShopify} color="#64943E" />
                        </div>
           
                        <div className="icons">
                        <FontAwesomeIcon icon={faGit} color="#FF5733" />
                        </div>
              
                        <div className="icons">
                        <FontAwesomeIcon icon={faJira} color="#0044FF" />
                        </div>
                </div>
        </div>
    );
}

export default About