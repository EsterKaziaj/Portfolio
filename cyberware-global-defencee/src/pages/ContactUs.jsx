import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setState] = useState({
    fullName: '',
    email: '',
    telephone: '',
    country: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setState({
        fullName: '',
        email: '',
        telephone: '',
        country: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Your Cybersecurity Experts – Securing the Future Today</h1>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact us.</h2>
          <p className="contact-tagline">We are here to help you secure your future</p>
          
          <div className="contact-details">
            <p><strong>Email:</strong> info@cyberg.com</p>
            <p><strong>Phone:</strong> +49 123 456 789</p>
            <p><strong>Address:</strong> Street, Berlin Germany</p>
          </div>
          
          <div className="process-section">
            <h3>What happens next?</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <p>We'll review your cybersecurity needs.</p>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <p>You'll receive a customized security proposal</p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <p>Once approved, we'll implement the solutions and support you</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="telephone">Telephone number</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="Your phone number"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="country">Select your country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Your country</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Send us a Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className={`submit-btn ${formSubmitted ? 'submitted' : ''}`}>
              {formSubmitted ? 'Sent!' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
      
      <div className="contact-footer">
        <div className="footer-graphic"></div>
      </div>
    </div>
  );
};

export default ContactUs;