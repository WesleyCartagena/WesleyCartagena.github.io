import './index.scss';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index'
import GuardiansCentral from '../../assets/images/GuardiansCentral.png'
import pokeshop from '../../assets/images/PokeShop.png'
import weatherapp from '../../assets/images/WeatherApp.png'
import keylogger from '../../assets/images/keylogger.png'
import packetsniffer from '../../assets/images/wireshark.png'



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
    
        <section className="container projects-page">
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
        </section>
    );
}
export default Projects