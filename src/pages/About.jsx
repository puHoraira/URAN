import { 
  groupInfo,
  principalInvestigator, 
  mscStudents, 
  bscStudents 
} from '../data/about.js'
import './About.css'

function About() {
  return (
    <>
      {/* Simple Header */}
      <section className="about-header">
        <div className="about-header-bg">
          <div className="about-grid"></div>
        </div>
        
        <div className="container">
          <div className="about-header-content">
            <h1>{groupInfo.name}</h1>
            <p className="about-header-desc">{groupInfo.subtitle}</p>
            <p className="about-header-desc">{groupInfo.description}</p>
          </div>
        </div>
      </section>

      {/* Supervisor */}
      <section className="section supervisor-section">
        <div className="container">
          <h2 className="simple-title">Supervisor</h2>

          <div className="supervisor-card">
            <div className="supervisor-avatar">
              <img src={principalInvestigator.image} alt={principalInvestigator.name} onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'flex' }} />
              <span>{principalInvestigator.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
            </div>

            <div className="supervisor-info">
              <h3>{principalInvestigator.name}</h3>
              <p className="supervisor-role">{principalInvestigator.role}</p>
              <p className="supervisor-dept">{principalInvestigator.department}</p>
              <p className="supervisor-dept">{principalInvestigator.education}</p>

              <div className="supervisor-contact">
                <a href={`mailto:${principalInvestigator.email}`} className="contact-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>Email</span>
                </a>
                <a href={principalInvestigator.faculty} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span>University profile</span>
                </a>
                <a href={principalInvestigator.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href={principalInvestigator.scholar} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/>
                  </svg>
                  <span>Scholar</span>
                </a>
                <a href={principalInvestigator.researchgate} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span>ResearchGate</span>
                </a>
                <a href={principalInvestigator.academia} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span>Academia</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students */}
      {mscStudents.length > 0 && (
        <section className="section students-section">
          <div className="container">
            <h2 className="simple-title">MSc Student</h2>
            <div className="students-grid">
              {mscStudents.map((student) => (
                <div className="student-card" key={student.name}>
                  <div className="student-avatar">
                    {student.image && <img src={student.image} alt={student.name} onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'flex' }} />}
                    <span>{student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                  </div>
                  
                  <h3>{student.name}</h3>
                  <p className="student-role">{student.role}</p>
                  <p className="student-focus">{student.focus}</p>

                  <div className="student-socials">
                    <a href={`mailto:${student.email}`} title="Email">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                    <a href={student.linkedin} title="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    {student.github && (
                      <a href={student.github} title="GitHub">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section students-section">
        <div className="container">
          <h2 className="simple-title">BSc Students</h2>
          <div className="students-grid">
            {bscStudents.map((student) => (
              <div className="student-card" key={student.name}>
                <div className="student-avatar">
                  {student.image && <img src={student.image} alt={student.name} onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'flex' }} />}
                  <span>{student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                </div>
                
                <h3>{student.name}</h3>
                <p className="student-role">{student.role}</p>
                <p className="student-focus">{student.focus}</p>

                <div className="student-socials">
                  <a href={`mailto:${student.email}`} title="Email">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a href={student.linkedin} title="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  {student.github && (
                    <a href={student.github} title="GitHub">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {student.facebook && (
                    <a href={student.facebook} title="Facebook">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
