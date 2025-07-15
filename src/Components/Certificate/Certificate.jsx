import './Certificate.css'
const certificateData = [
  {
    title: 'Object-Oriented Data Structures in C++',
    platform: 'Coursera',
    date: 'Apr 2025',
    link: 'https://coursera.org/share/0fe7250dc4d9760d0d5472ccb4a396ad',
  },
  {
    title: 'Advanced React',
    platform: 'Coursera',
    date: 'Apr 2025',
    link: 'https://coursera.org/share/33585f0213e0fa8cf64b8115f5476eec',
  },
  {
    title: 'Building Web Applications in PHP',
    platform: 'Coursera',
    date: 'November 2024',
    link: 'https://coursera.org/share/2c19b1ea770c728f4ea7e3c2ea2e17ca',
  },
  {
    title: 'Secure Full Stack MEAN Developer',
    platform: 'Coursera',
    date: 'Jul 2024',
    link: 'https://coursera.org/share/f1e3d062faf6f61e42417b78c49fd33f',
  },
  {
    title: 'HTML, CSS, and Javascript for Web Developers',
    platform: 'Coursera',
    date: 'Apr 2024',
    link: 'https://coursera.org/share/ccbc464f1056c075d797ccfc7cc21f0d',
  },
  {
    title: 'Server side JavaScript with Node.js',
    platform: 'Coursera',
    date: 'Apr 2024',
    link: 'https://coursera.org/share/49989a7ef4c071c3df7fdc87091f8fae',
  },
  
];
function Certificate() {
  return (
    <section id ='certificate' className='certificate-back'>
      <div className='certificate-background-outer'>
        <h1 className='certificate-title-text'>Certificates & Training</h1>
        <div className='section-card training-section'>
          <h2 className='section-heading training-heading'>Training</h2>
          <div className='training-card'>
            <div className='training-card-header'>
              <span className='training-title'>E-box – Data Structure Using C</span>
              <span className='training-date'>Jul 2024</span>
            </div>
            <div className='training-card-body'>
              <span className='training-description'>Gained practical experience in implementing data structures using the C programming language. Focused on fundamental concepts such as arrays, linked lists, stacks, queues, trees, and graphs.</span>
              <div className='training-badges'>
                <span className='badge badge-green'>C Programming</span>
                <span className='badge badge-blue'>Data Structures</span>
                <span className='badge badge-purple'>Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
        <div className='section-card certificates-section'>
          <h2 className='section-heading certificates-heading'>Certificates</h2>
          <div className='certificates-list'>
            {certificateData.map((cert, index) => (
              <div className='certificate-card-modern' key={index}>
                <div className='certificate-info-modern'>
                  <span className='certificate-name-modern'>{cert.title}</span>
                  <span className='certificate-details-modern'>{cert.platform} • {cert.date}</span>
                </div>
                <a
                  className='certificate-view-btn'
                  href={cert.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  View <span className='external-link-icon'>&#8599;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate