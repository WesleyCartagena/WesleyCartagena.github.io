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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };

      handleResize(); // Call initially to set isMobile state
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return(
       <>
            {isMobile ? (
                <div className="home-page-container-mobile">
                    <div>
                        <img className="" src={profile} id="profilePic" alt="profile" />
                    </div>
                    <div className="text-zone" id="text">
                        <h1>
                            <span className={letterClass}>Hi,</span>
                            <br />
                            <span className={`${letterClass} _13`}>I'm</span>
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                            <br />
                            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                        </h1>
                    </div>
                    <div>
                        <h2 className=''>HTML / CSS / JavaScript / React.js / Python / C# / Shopify Liquid</h2>
                    </div>
                    <div className='pt-3'>
                        <Link to="projects" className="flat-button">Checkout My Projects</Link>
                    </div>
                </div>
            ) : (
                <div className="home-page-container d-flex flex-row">
                    <div className="text-zone position-absolute top-50 start-0 translate-middle-y" id="text">
                        <h1>
                            <span className={letterClass}>Hi,</span>
                            <br />
                            <span className={`${letterClass} _13`}>I'm</span>
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                            <br />
                            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                        </h1>
                        <h2>HTML / CSS / JavaScript / React.js / Python / C# / Shopify Liquid</h2>
                        <Link to="projects" className="flat-button">Checkout My Projects</Link>
                    </div>
                    <div>
                        <img className="position-absolute top-50 end-0 translate-middle-y" src={profile} id="profilePic" alt="profile" />
                    </div>
                </div>
            )}
        </>
    );

}
export default Home