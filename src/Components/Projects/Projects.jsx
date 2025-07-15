import './Project.css';

const projectData = [
  {
  type: 'Desktop Application',
  date: 'Apr 2025',
  name: 'Bank Management System',
  description:
    'Designed and developed a C-based system to automate banking operations like account creation, deposits, withdrawals, and loan tracking. Implemented file handling for persistent customer data management.',
  tech: ['C++', 'File Handling', 'Data Structures'],
  codeLink: 'https://github.com/Lovishmehra/bankManagementSystem', 
},
  {
    type: 'Web Application',
    date: 'Feb 2025',
    name: 'Rock Gym',
    description:
      'Created a gym website where users could explore all details about the gym. Implemented React Hooks for efficient state management and optimized performance.',
    tech: ['React.js', 'Tailwind CSS', 'React Icons'],
    codeLink: 'https://github.com/Lovishmehra/PEP-ASSIGNMENT',
  },
  {
    type: 'Desktop Application',
    date: 'Feb 2025',
    name: 'Hotel Management System',
    description:
      'Built a system that allowed customers to book rooms based on availability. Managed customer details and tracked room availability status.',
    tech: ['C++', 'Data Structures', 'System Design'],
    codeLink: 'https://github.com/Lovishmehra/Hotel-management--System',
  },
  {
    type: 'E-commerce Website',
    date: 'May 2024',
    name: 'Stark-Power E-commerce',
    description:
      'Designed and developed an e-commerce website where users could browse and purchase electronic items with responsive and user-friendly experience.',
    tech: ['HTML', 'Bootstrap', 'JavaScript'],
    codeLink: 'https://github.com/Lovishmehra/power-ecommerce',
  },
    {
  type: 'Web Application',
  date: 'Apr 2024',
  name: 'SwipeShop',
  description:
    'Developed a full-stack E-commerce platform with OTP-based user authentication. Enabled secure product browsing, cart management, and order placement with real-time backend support.',
  tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
  codeLink: 'https://github.com/Lovishmehra/SwipeShop-ecommerce-Website', 
},

  
];

function Projects() {
  return (
    <section id="projects" className="projects-background">
      <div className="project-container">
        <div className="project-title">
          <h2>Featured Projects</h2>
        </div>

        <div className="project-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-header">
                <span className="badge">{project.type}</span>
                <span className="project-date">{project.date}</span>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.codeLink} className="view-code" target="_blank" rel="noopener noreferrer">
                🔗 View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
