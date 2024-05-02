import './index.scss';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'
import GuardiansCentral from '../../assets/images/GuardiansCentral.png'
import LibraryRobot from '../../assets/images/Bryan-and-Wes-Photo.jpg'
import ASC from '../../assets/images/asc-800x450.png'
import Ue from '../../assets/images/ue.png'
import si from '../../assets/images/spaceinvaders.png'
import pokeshop from '../../assets/images/PokeShop.png'
import weatherapp from '../../assets/images/WeatherApp.png'
import keylogger from '../../assets/images/keylogger.png'
import packetsniffer from '../../assets/images/wireshark.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {
    const[letterClass,setLetterClass]= useState('text-animate')
    const aboutArray = ['Projects']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout()
    }, []);
    return(
        <>
        <div className='projects-page-container d-flex flex-column justify-content-center text-center'>
            <div className='project-header-container'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={aboutArray} 
                        idx={15}
                    />
                </h1>
            </div>
            <div className='projects-container justify-content-evenly align-items-center d-flex flex-row flex-wrap mt-5'>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={GuardiansCentral} />
                    <Card.Body className='project-card-body text-center'>
                        <Card.Title>Guardians Central</Card.Title>
                        <Card.Text>
                            Destiny 2 website built using React.js, Express.js, and Node.js
                        </Card.Text>
                    </Card.Body>
                    <ul className='text-start'>
                        <li>
                            Built a fully responsive website to serve as a centralized hub for Destiny 2 players
                        </li>
                        <li>
                            Implemented a daily and weekly reset timer using React Hooks
                        </li>
                        <li>
                            Integrated a Live Twitter feed aggregator for all Destiny 2 related Twitter accounts
                        </li>
                    </ul>
                    <div className="card-buttons d-flex justify-content-center">
                        <Button href="https://guardianscentral.gg" target="_blank" rel="noreferrer" className='flat-button mx-4' variant="outline-light">Preview</Button>
                        <Button href="https://github.com/GuardiansCentral/guardianscentral.github.io" target="_blank" rel="noreferrer" className='flat-button mx-4' variant="outline-light">Source Code</Button>
                    </div>
                </Card>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={pokeshop} />
                    <Card.Body className='text-center'>
                        <Card.Title>Pokemon Eccomerce Shop</Card.Title>
                        <Card.Text>
                            Mockup Pokemon Eccomerce shop built using React and the PokeAPI
                        </Card.Text>
                    </Card.Body>
                    <ul className='text-start py-4'>
                            <li>
                                Used the Pokemon API to build a mock up pokemon eccomerce store
                            </li>
                            <li>
                                Implemented a Functional Cart and Search bar
                            </li>
                            <li>
                                Built using HTML,CSS,Javascipt
                            </li>
                        </ul>
                    <div className="card-buttons d-flex">
                        <Button href="https://wesleycartagena.com/wesley-pokeshop/" target="_blank" rel="noreferrer" className='flat-button mx-4' variant="outline-light">Preview</Button>
                        <Button href="https://github.com/WesleyCartagena/wesley-pokeshop" target="_blank" rel="noreferrer" className='flat-button mx-4' variant="outline-light">Source Code</Button>
                    </div>
                </Card>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={weatherapp} />
                    <Card.Body className='text-center'>
                        <Card.Title>Weather App</Card.Title>
                        <Card.Text>
                            Weather App built using React and Weather API
                        </Card.Text>
                    </Card.Body>
                    <ul className='text-start py-4'>
                            <li>
                                Use the weather api to build a weather app that displays current weather conditions of places around the world
                            </li>
                            <li>
                                Built in Search Bar
                            </li>
                            <li>
                            Built using HTML,CSS,Javascript, and React
                            </li>
                        </ul>
                        <div className="card-buttons d-flex justify-content-center">
                        <Button href="https://wesleycartagena.com/wesley-weather-app/" target="_blank" rel="noreferrer" className='flat-button mx-4' variant="outline-light">Preview</Button>
                        <Button href="https://github.com/WesleyCartagena/wesley-weather-app" target="_blank" rel="noreferrer" className='flat-button mx-4' variant="outline-light">Source Code</Button>
                    </div>
                </Card>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={keylogger} />
                    <Card.Body className='text-center'>
                        <Card.Title>Keylogger</Card.Title>
                        <Card.Text>
                            Keylogging script written in Python
                        </Card.Text>
                    </Card.Body>
                    <ul className='text-start py-5'>
                            <li>
                                Built a keylogger to better understand how they work
                            </li>
                            <li>
                                Learned how this is a useful virus that can be used in social engineering attacks
                            </li>
                            <li>
                                Learned the importance of an anti-virus and good Cyber-Security Practices
                            </li>
                        </ul>
                </Card>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={packetsniffer} />
                    <Card.Body className='text-center'>
                        <Card.Title>Packet Sniffer</Card.Title>
                        <Card.Text>
                            Packet Sniffer written in Python
                        </Card.Text>
                    </Card.Body>
                    <ul className='text-start py-5'>
                            <li>
                                Developed a packet sniffer in order to better understand how they work
                            </li>
                            <li>
                                Learned how wireshark works and how it can be used for Traffic Analysis
                            </li>
                            <li>
                                Learned how this could be used to detect suspicious activity and bad actors in a network
                            </li>
                        </ul>
                </Card>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={LibraryRobot} />
                    <Card.Body className='text-center'>
                        <Card.Title>Library Robot</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    <ul className='text-start'>
                            <li>
                                Built and programmed the SUNY New Paltz Library Robot, to serve as a librarian assistant by going down the library aisles and scanning them for missing or misplaced books that are then sent to a website to inform the librarian
                            </li>
                            <li>
                                Programmed using a Raspberry Pi and Python for motor functions and the OpenCV library for book detection
                            </li>
                            <li>
                                Contributed to the server code which used Java to connect the robot to the school database that sent information to the website
                            </li>
                    </ul>
                </Card>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={Ue} />
                    <Card.Body className='text-center'>
                        <Card.Title>The Quest of Adra</Card.Title>
                        <Card.Text>
                            A game about a soldier on a quest to steal a sword built using the Unreal Engine 4
                        </Card.Text>
                    </Card.Body>
                    <ul className='text-start '>
                            <li>
                                Developed a Top-Down 3-D game using the Unreal Engine 4 about a soldier on a quest to steal a mythical sword
                            </li>
                            <li>
                                Worked on character movement/animation, AI, character interaction, and sprite creation
                            </li>
                            <li>
                                Directed a team of 3, by assigning them their roles and responsibilities as well as making a schedule for the group
                            </li>
                        </ul>
                    <div className="card-buttons d-flex justify-content-center">
                        <Button  href="https://github.com/WesleyCartagena/SEGAMEv0.2/tree/master" target="_blank" rel="noreferrer" className='flat-button mx-4' variant="outline-light">Source Code</Button>
                    </div>
                </Card>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={ASC} />
                    <Card.Body className='text-center'>
                        <Card.Title>BSW House</Card.Title>
                        <Card.Text>
                            A automated home project that used a website to control a model house
                        </Card.Text>
                    </Card.Body>
                    <ul className='text-start py-4'>
                            <li>
                                Built a model house using foam, an arduino, a raspberry pi, and a relay
                            </li>
                            <li>
                                Built a website using Javascipt and Dweet.io that would send information to the model home
                            </li>
                            <li>
                                Presented this project in front of a large group of Goldman Sachs Employees
                            </li>
                    </ul>
                    <div className="card-buttons d-flex justify-content-center">
                        <Button href="https://www.goldmansachs.com/careers/blog/posts/all-star-code-2016.html" target="_blank" rel="noreferrer" className='flat-button' variant="outline-light">Goldman Sachs</Button>
                        <Button href="https://www.businessinsider.com/goldman-sachs-summer-immersion-program-with-all-star-code-2016-8" target="_blank" rel="noreferrer" className='flat-button' variant="outline-light">Business Insider</Button>
                    </div>
                </Card>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={si} />
                    <Card.Body className='text-center'>
                        <Card.Title>Space Invaders(Recreation)</Card.Title>
                        <Card.Text>
                            Recreated the Retro game space invaders using Javascript and the p5.js library
                        </Card.Text>
                        <ul className='text-start py-4'>
                            <li>
                                This project is what kicked off my career in programming and it was how I fell in love with code
                            </li>
                            <li>
                                It was one of the best personal projects built in my cohort of All Star Code
                            </li>
                            <li>
                                It was built using pure Javascript and the p5.js library
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        </div>
         </>
    );
}
export default Projects