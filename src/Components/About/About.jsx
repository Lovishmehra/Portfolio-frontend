
import './About.css'
function About() {
  return (
    <section id="about" className="background-about">
      <div className="background">
      <div className="heading">
          About Me
        </div>
      <div className="container">
        
        <div className="inner-container1">
          <div>
            <h2 className='Background-name'>Background</h2>
          </div>
          
          <div className="paragraph">
            <p className="inner-paragraph">  
          I'm a Computer Science Engineering student at Lovely Professional University with a passion for full-stack development. 
          I enjoy building web applications that solve real-world problems and create meaningful user experiences.
          </p>
          </div>
          <div className='button-group'>
            <button className='button1 butt'>Jalandhar, Punjab, India</button>
            <button className='button1 butt2'>+91 7986721870</button>
            <button className='button1 butt3'>lovishmehra798@gmail.com</button>
          </div>
          

        </div>
        <div className="inner-container2">
          <div className='inner-text'>
            <h2>Education</h2>
          </div>
          <div>
            <div className='button2'>
              <div className='education'>
                <p className='edu1'>Computer Science and Engineering</p>
                <p className='edu2'>Lovely Professional University</p>
                <p className='edu3'>Aug 2022 - Present | CGPA: 7.70</p>
              </div>
            </div>
            <div className='button2'>
              <div className='education'>
                <p className='edu3'>Senior Secondary (Science)</p>
                <p className='edu2'>State School of Sports</p>
                <p className='edu1'>Mar 2022 | 83%</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    </section>
  )
}

export default About