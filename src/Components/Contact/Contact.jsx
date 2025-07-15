import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    try {
      const res = await fetch('https://portfolio-backend-6yq1.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus(`Failed to send message: ${err.message}`);
    }

    setLoading(false);
  };

  return (
    <section className='contact-background'>
      <div className='contact-container'>
        <div className='contact-heading'>Get in Touch</div>

        <div className='contact-wrapper'>
          {/* Left Side - Contact Info */}
          <div className='contact-info'>
            <h2 className='contact-info-heading'>Let's Connect</h2>
            <p className='contact-info-text'>
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to chat about
              technology, feel free to reach out!
            </p>

            <div className='contact-info-button'>
              <div className='Information-button contact-inner-button1'>
                <p className='contact-email'>Email</p>
                <p className='email-info'>lovishmehra798@gmail.com</p>
              </div>
              <div className='Information-button contact-inner-button2'>
                <p className='contact-phone'>Phone</p>
                <p className='phone-info'>+91 7986721870</p>
              </div>
              <div className='Information-button contact-inner-button3'>
                <p className='contact-location'>Location</p>
                <p className='location-info'>Jalandhar, Punjab, India</p>
              </div>
            </div>

            <div className='Social-contact-button'>
              <a href='https://www.linkedin.com/in/lovish-mehra-634811323/' target='_blank' rel="noopener noreferrer" className='Linkedin'>LinkedIn</a>
              <a href='https://github.com/Lovishmehra' target='_blank' rel="noopener noreferrer" className='Github'>GitHub</a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className='contact-form'>
            <h2 className='contact-form-heading'>Send a Message</h2>
            <p className='contact-form-subtext'>Fill out the form below and I'll get back to you as soon as possible.</p>
            <form className='form' onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Your Name'
                className='form-input-full'
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type='email'
                placeholder='Your Email'
                className='form-input-full'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder='Your Message'
                className='form-textarea'
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              ></textarea>
              <button type='submit' className='form-submit' disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status && <div className='form-status'>{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
