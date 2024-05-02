import './index.scss'
import LogoW from '../../assets/images/W.png'
import LogoSubtitle from '../../assets/images/cartagena.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import React from "react"
import { useState, useEffect } from 'react';

const Topbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 575);
      };

      handleResize(); // Call initially to set isMobile state
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
      <Navbar className='wc-navbar' expand='sm' collapseOnSelect>
            <Link className='logo' to = '/'>
                <img className="letter-logo" alt="" width="30" src={LogoW} height="25"/>
                <img className="sub-logo" src={LogoSubtitle} alt="Cartagena"/>
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{  background:'#32CD30', color:'white', marginRight:'15px' ,marginBottom:'10px'}} />
          <Navbar.Collapse className='text-center' id="basic-navbar-nav">
            <Nav className='navbar-middle justify-content-start'>
              <Nav.Item className='navbar-middle-item p-1'>
                <LinkContainer to="/">
                  <Nav.Link className='navbar-middle-item-text' id="home-link">HOME</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item className='navbar-middle-item p-1'>
                <LinkContainer to="/about">
                  <Nav.Link className='navbar-middle-item-text' id="about-link">ABOUT</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item className='navbar-middle-item p-1'>
                <LinkContainer to="/projects">
                  <Nav.Link className='navbar-middle-item-text' id="project-link">PROJECTS</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
            {/* Render LinkedIn and GitHub links inside collapse for mobile */}
            {isMobile && (
              <Nav className='navbar-middle justify-content-end'>
                <Nav.Item className='navbar-middle-item pt-2'>
                  <Link className='text-decoration-none navbar-middle-item-text' to="https://www.linkedin.com/in/wesley-cartagena-870603126/" target="_blank" rel="noreferrer" id="linkedin-link">LINKEDIN</Link>
                </Nav.Item>
                <Nav.Item className='navbar-middle-item pt-3'>
                  <Link className='text-decoration-none navbar-middle-item-text' to="https://github.com/wesleycartagena" target="_blank" rel="noreferrer" id="github-link">GITHUB</Link>
                </Nav.Item>
              </Nav>
            )}
          </Navbar.Collapse>
          {/* Render LinkedIn and GitHub links outside collapse for desktop */}
          {!isMobile && (
            <Nav className='navbar-middle justify-content-end'>
              <Link className='navbar-end' to="https://www.linkedin.com/in/wesley-cartagena-870603126/" target="_blank" rel="noreferrer">
                <Navbar.Brand className='navbar-end-icons' id="linkedin">
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </Navbar.Brand>
              </Link>
              <Link className='navbar-end' to="https://github.com/wesleycartagena" target="_blank" rel="noreferrer">
                <Navbar.Brand className='navbar-end-icons' id="github">
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </Navbar.Brand>
              </Link>
            </Nav>
          )}
      </Navbar>
    ) 
}
export default Topbar