import './Skills.css';
import skillsData from './SkillsData';

function Skills() {
  return (
    <section id='skills' className='background-skill'>
      <div className='background-container-Skills'>
        <h1 className='skill-heading'>Technical Skills</h1>
        <div className='skill-button'>
          {skillsData.map((section, index) => (
            <div key={index} className={`skill-button-inner ${section.className}`}>
              <h3>{section.title}</h3>
              <div className='skill-button-inner-inner bacground-skills'>
                <div className='inner-Languages'>
                  {section.skills.map((skill, idx) => (
                    <div key={idx} className={section.badgeClass}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
