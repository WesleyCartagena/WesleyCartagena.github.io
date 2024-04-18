// import './index.scss'
// import { useEffect, useState, useRef } from 'react'
// import emailjs from '@emailjs/browser';
// import AnimatedLetters from '../AnimatedLetters/Index'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSquareEnvelope, faMapLocation} from '@fortawesome/free-solid-svg-icons'


// const Contact = () => {
//   const[letterClass, setLetterClass]= useState('text-animate')
//   const contactArray = ['Contact',' ','Me']
//   useEffect(() => {
//     setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 4000)
//     return () => clearTimeout()
//     }, []);
//    const form = useRef()
//    const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_bd548m8', 'template_nntslif', form.current, 'UKu0PNHK_5BBZMjRr')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset()
//     };
//     return(
//         <section className ='container contact-page'>
//         <div className="form-container">
//           <form ref={form} onSubmit={sendEmail} className="contact-form">
//             <div className='contact-text-zone'>
//               <span>
//                 <AnimatedLetters letterClass={letterClass}
//                   strArray={contactArray} 
//                   idx={15}
//                />
//               </span>             
//             </div> 
//             <input type="text"  className="feedback-input" placeholder='Full Name' name='user_name' required/>
//             <input type="email"  className="feedback-input" placeholder='email' name='user_email' required/>
//             <input type="text" className="feedback-input" placeholder='subject' name='subject' required/>
//             <textarea className="feedback-input" name="message" cols="30" rows="10"></textarea>
//             <button type="submit"className="btn">Send Message</button>
//             <div className="contact-icons">
//             <ul id="horizontal-list-contact">
//               <li>
//                 <span className="icons">
                  
//                 <FontAwesomeIcon icon={faSquareEnvelope} color="#32CD30" />
//                 </span>
//                 <span className="info"> </span>
//               </li>
//               <li>
//                 <span className="icons">
//                 <FontAwesomeIcon icon={faMapLocation} color="#32CD30" />
//                 </span>
//                 <span className="info"> New York</span>
//               </li>
//             </ul>
//           </div>
//           </form>
//           </div>
//         </section>
//     );
// }

// export default Contact

