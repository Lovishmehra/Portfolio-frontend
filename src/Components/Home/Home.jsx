
import ProfileImg3 from './ProfileImg3.jpeg'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <section id="home" className="Background-class">
      <div className="Introduction">
        <div className="photo">
          <img src={ProfileImg3} alt="profile photo" />
          <h1 className='Lovish-Mehra'>Lovish Mehra</h1>
          <p className='Specialization'>Full Stack Developer & Computer Science Student</p>
          <div className='introo'>
          <p className='Introduction2'>
            Passionate about creating innovative web solutions with modern technologies.
            Currently pursuing Computer Science Engineering at Lovely Professional University.
          </p>
          
          </div>
        </div>
        <div className='Buttons'>
          <a href="specializedcv.pdf" className='Download-Resume' target='_blank' rel="noopener noreferrer">
            &nbsp; View Resume
          </a>
          <a href='#contact' className='Get-In-Touch'>Get In Touch</a>
        </div>
        <div className="Socials">
          <a href="mailto:lovishmehra798@gamil.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/lovish-mehra-634811323/" type='_blank' aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/lovishmehra" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          {/* <a href="https://www.instagram.com/lovishmehra/" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a> */}
        </div>
      </div>
    </section>
  )
}
