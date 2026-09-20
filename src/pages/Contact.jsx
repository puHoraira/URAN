import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Page Header */}
      <section className="contact-header">
        <div className="contact-header-bg">
          <div className="contact-grid-bg"></div>
        </div>
        
        <div className="container">
          <div className="contact-header-content">
            <h1>Get in Touch</h1>
            <p className="contact-header-desc">
              Interested in collaborating or joining our research group? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Info */}
            <div className="contact-info-card">
              <h2>Contact Information</h2>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>
                      Department of Computer Science and Engineering
                      <br />University of Dhaka
                      <br />Dhaka-1000, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:mdabu-2021911202@cs.du.ac.bd">mdabu-2021911202@cs.du.ac.bd</a>
                    </p>
                    <a className="direct-email-link" href="mailto:mdabu-2021911202@cs.du.ac.bd?subject=Message%20for%20URAN%20Research%20Group">
                      Open your email app
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Prospective Students</h3>
                    <p>We welcome conversations about UAV autonomy, student research, technical collaboration, and field applications.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h2>Send a Message</h2>
              {submitted ? (
                <div className="form-success">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3>Message recorded</h3>
                  <p>Thank you for contacting URAN. Your response has been submitted successfully.</p>
                  <button type="button" className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSe8suR4pDJ0jsYm9TmXkIT2U_YRPte2xuwLAfn5871lvAnlWQ/formResponse"
                  method="POST"
                  target="google-form-submit"
                  className="contact-form"
                  onSubmit={() => {
                    window.setTimeout(() => setSubmitted(true), 800)
                  }}
                >
                  <p className="contact-form-intro">
                    Tell us about your interest in UAV research, collaboration, or joining the group.
                  </p>

                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input type="text" id="contact-name" name="entry.1046913743" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input type="email" id="contact-email" name="entry.122495419" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-institution">Institution</label>
                    <input type="text" id="contact-institution" name="entry.1701011151" />
                  </div>

                  <fieldset className="form-group form-options">
                    <legend>What would you like to discuss?</legend>
                    {['Joining the research group', 'Research collaboration', 'UAV project collaboration', 'Undergraduate research', 'MSc research', 'Technical discussion', 'Other'].map((option) => (
                      <label key={option} className="form-option">
                        <input type="radio" name="entry.1239306928" value={option} required />
                        <span>{option}</span>
                      </label>
                    ))}
                  </fieldset>

                  <fieldset className="form-group form-options">
                    <legend>Research Interests</legend>
                    {['Autonomous navigation', 'Computer vision', 'Edge AI', 'Flight control', 'Sensor fusion', 'Multi-UAV systems', 'Mission planning', 'UAV applications', 'Other'].map((option) => (
                      <label key={option} className="form-option">
                        <input type="checkbox" name="entry.782869802" value={option} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </fieldset>

                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input type="text" id="contact-subject" name="entry.1642512104" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="entry.1702891659" rows="5" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-link">CV, portfolio, or research proposal link</label>
                    <input type="url" id="contact-link" name="entry.1895279309" placeholder="https://" />
                    <span className="form-help">Optional. Paste a Google Drive, GitHub, LinkedIn, or portfolio link.</span>
                  </div>

                  <button type="submit" className="btn btn-accent">
                    Submit message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              )}
              <iframe name="google-form-submit" title="Google Form submission" className="form-submit-frame" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
