import './index.scss';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'
import GuardiansCentral from '../../assets/images/GuardiansCentral.png'
import pokeshop from '../../assets/images/PokeShop.png'
import weatherapp from '../../assets/images/WeatherApp.png'
import keylogger from '../../assets/images/keylogger.png'
import packetsniffer from '../../assets/images/wireshark.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



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
                    <Card.Img variant="top" src={GuardiansCentral} />
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
                    <Card.Img variant="top" src={GuardiansCentral} />
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
                    <Card.Img variant="top" src={GuardiansCentral} />
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
                    {/*<div className="card-buttons d-flex justify-content-center">
                        <Button className='flat-button mx-4' variant="outline-light">Preview</Button>
                        <Button className='flat-button mx-4' variant="outline-light">Source Code</Button>
                    </div>*/}
                </Card>
                <Card className='project-card text-light border border-light d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={GuardiansCentral} />
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
                    {/*<div className="card-buttons d-flex justify-content-center">
                        <Button className='flat-button mx-4' variant="outline-light">Preview</Button>
                        <Button className='flat-button mx-4' variant="outline-light">Source Code</Button>
                    </div>*/}
                </Card>
            </div>
        </div>
        {/*<section className="container projects-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={aboutArray} 
                        idx={15}
                    />
                </h1>
            </div>
            <section className="container Projects">
                <div className='projects' id='project1'>
                    <img src= {GuardiansCentral} alt="portfolio"></img>
                    <h1>Guardians Central</h1>
                    <h2>Destiny 2 website built using React.js, Express.js, and Node.js</h2>
                    <ul>
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
                    <div>
                        <a                         
                        href="https://guardianscentral.gg"
                        target="_blank"
                        rel="noreferrer" className="flat-button">Preview</a>
                    </div>
                    <div>                    
                        <a                         
                        href="https://github.com/GuardiansCentral/guardianscentral.github.io"
                        target="_blank"
                        rel="noreferrer" className="flat-button2">Source Code</a>
                    </div>
                </div>
                <div className='projects' id='project4'>
                    <img src= {pokeshop} alt="portfolio" id="pokeshop"></img>
                    <h1 id="pokeh1">Pokemon Eccomerce Shop</h1>
                    <h2>Pokemon App built using React and PokeAPI</h2>
                    <ul>
                        <li>
                            Used the Pokemon API to build a mock up pokemon eccomerce store
                        </li>
                        <li>
                            Functional Cart and Search bar
                        </li>
                        <li>
                            Built using HTML,CSS,Javascipt and React
                        </li>
                    </ul>
                    <div>
                        <a                         
                        href="https://wesleycartagena.github.io/wesley-pokeshop/"
                        target="_blank"
                        rel="noreferrer" className="flat-button">Preview</a>
                    </div>
                    <div>                    
                        <a                         
                        href="https://github.com/wesleycartagena/wesley-pokeshop"
                        target="_blank"
                        rel="noreferrer" className="flat-button2">Source Code</a>
                    </div>
                </div>   
                <div className='projects' id='project5'>
                <img src= {weatherapp} alt="weatherapp" id="weather" ></img>
                    <h1>Weather App</h1>
                    <h2>Weather App built using React and Weather API</h2>
                    <ul>
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
                    <div>
                        <a                         
                        href="https://wesleycartagena.github.io/wesley-weather-app/"
                        target="_blank"
                        rel="noreferrer" className="flat-button">Preview</a>
                    </div>
                    <div>                    
                        <a                         
                        href="https://github.com/wesleycartagena/wesley-weather-app"
                        target="_blank"
                        rel="noreferrer" className="flat-button2">Source Code</a>
                    </div>
                </div>
                <div className='projects' id='project2'>
                    <img src= {keylogger} alt="portfolio" id="keylogger"></img>
                    <h1>Keylogger</h1>
                    <h2>Keylogging script written in Python</h2>
                    <ul>
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
                </div> 
                <div className='projects' id='project3'>
                    <img src= {packetsniffer} alt="portfolio" id="packetsniffer"></img>
                    <h1>Packet Sniffer</h1>
                    <h2>Packet Sniffer written in Python</h2>
                    <ul>
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
                </div>     
            </section>
            </section>*/}
         </>
    );
}
export default Projects