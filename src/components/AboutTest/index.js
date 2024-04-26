import './index.scss'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AnimatedLetters from '../AnimatedLetters/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,faPython,faCss3,faJsSquare,faShopify,faReact,faGit,faJira } from '@fortawesome/free-brands-svg-icons'

const AboutTest = () => {
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
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}

export default AboutTest