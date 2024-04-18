import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/Index';
import profile from '../../assets/images/Profile.png'

const Home = () => {
    const[letterClass, setLetterClass]= useState('text-animate')
    const nameArray = [' ','Wesley',' ','Cartagena']
    const jobArray = ['I','T',' ','Developer']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout()
    }, []);

    return(
        
        <section className="container home-page">
            <div className="text-zone" id="text">
                <h1>
                <span className={letterClass}>Hi,</span>
                <br/>
                <span className={`${letterClass} _13`}>I'm</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Developer / HTML / CSS /  JavaScript / React JS / Python / Shopify Liquid</h2>
                <Link to="projects" className="flat-button">Checkout My Projects</Link>
            </div>
            <img className = "text-zone" src = {profile} id = "pic" alt = "profile"/>
        </section>
        
    );

}
export default Home