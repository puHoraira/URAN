import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import research from '../data/research.js'
import news from '../data/news.js'
import projects from '../data/projects.js'
import { assetPath } from '../utils/assetPath.js'
import './Home.css'

function Home() {
  const [activeFlight, setActiveFlight] = useState(0)
  const latestNews = news.slice(0, 3)
  const featuredResearch = research.slice(0, 3)
  const featuredProject = projects[0]
  const flightImages = [
    {
      src: assetPath('/projects/mission-adaptive-uav/outdoor.jpeg'),
      alt: 'URAN UAV during an outdoor flight test',
      label: 'Outdoor flight test',
    },
    {
      src: assetPath('/projects/mission-adaptive-uav/indoor.png'),
      alt: 'URAN UAV during a controlled indoor flight test',
      label: 'Controlled test',
    },
    {
      src: assetPath('/projects/mission-adaptive-uav/platform.jpeg'),
      alt: 'URAN multirotor platform viewed from above',
      label: 'Current platform',
    },
  ]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveFlight((current) => (current + 1) % flightImages.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [flightImages.length])

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-gradient hero-gradient-1"></div>
          <div className="hero-gradient hero-gradient-2"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <span>URAN Research Group</span>
            </div>

            <h1 className="hero-title">
              Building UAVs that can perceive, decide, and act in the real world.
            </h1>

            <p className="hero-description">
              We develop the ideas, algorithms, and flight systems that make unmanned aerial vehicles more
              capable, adaptable, and dependable across complex environments and real missions.
            </p>

            <div className="hero-tags">
              <span className="tag">Perception</span>
              <span className="tag">Autonomy</span>
              <span className="tag">Embedded intelligence</span>
              <span className="tag">Multi-UAV systems</span>
            </div>

            <div className="hero-actions">
              <Link to="/research" className="btn btn-primary">
                Explore Research
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-flight-reel">
              <div className="hero-flight-reel__images">
                {flightImages.map((image, index) => (
                  <img
                    className={`hero-flight-image${activeFlight === index ? ' hero-flight-image--active' : ''}`}
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
              <div className="hero-flight-reel__caption">
                <span>Current project</span>
                <strong>{flightImages[activeFlight].label}</strong>
              </div>
              <div className="hero-flight-reel__progress" aria-label="Project images">
                {flightImages.map((image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    className={activeFlight === index ? 'is-active' : ''}
                    aria-label={`Show ${image.label}`}
                    onClick={() => setActiveFlight(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="section research-focus-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Do</span>
            <h2>Research Areas</h2>
            <p className="section-desc">
              From sensing and localization to learning, planning, and control, we study the connected
              technologies that make useful aerial autonomy possible.
            </p>
          </div>

          <div className="research-focus-grid">
            {featuredResearch.map((area, index) => (
              <Link className="research-card" key={area.id} to={`/research/${area.id}`}>
                <div className="research-card-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="research-card-content">
                  <h3>{area.title}</h3>
                  <p>{area.summary}</p>
                </div>
                <div className="research-card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/research" className="btn-link">
              View All Research Areas
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="section impact-section">
        <div className="container">
          <div className="impact-grid">
            <div className="stat-card">
              <div className="stat-value">07</div>
              <div className="stat-label">Research directions</div>
              <div className="stat-desc">Across the UAV autonomy stack</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">01</div>
              <div className="stat-label">Active UAV project</div>
              <div className="stat-desc">Mission-adaptive autonomy platform</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">02</div>
              <div className="stat-label">Test environments</div>
              <div className="stat-desc">Indoor and outdoor flight work</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Current Project */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Project in progress</h2>
          </div>

          <div className="featured-card">
            <div className="featured-content">
              <div className="badge">{featuredProject.status}</div>
              <h3>{featuredProject.title}</h3>
              <p>
                {featuredProject.summary} {featuredProject.description}
              </p>

              <div className="featured-meta">
                <div className="meta-row">
                    <span className="meta-label">Project themes</span>
                  <div className="meta-tags">
                    {featuredProject.themes.map((theme) => <span className="tech-tag" key={theme}>{theme}</span>)}
                  </div>
                </div>
                <div className="meta-row">
                    <span className="meta-label">Next step</span>
                    <span className="meta-value">From modular design to real flight evaluation</span>
                </div>
              </div>

              <Link to="/projects" className="btn-link">
                Explore this project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="featured-visual">
              <div className="featured-visual-content">
                <img
                  src={assetPath('/projects/mission-adaptive-uav/platform.jpeg')}
                  alt="Current URAN multirotor platform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section news-section">
        <div className="container">
          <div className="section-header">
            <h2>News & Activities</h2>
          </div>

          <div className="news-grid">
            {latestNews.map((item) => (
              <article className="news-card" key={item.title}>
                <div className="news-date">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                <div className="news-type">{item.type}</div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/news" className="btn-link">
              View All News
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Flight Gallery */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">In the field</span>
            <h2>Flight Gallery</h2>
            <p className="section-desc">
              A glimpse of the aircraft and test environments behind our current UAV work.
            </p>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-item gallery-item--wide">
              <img src={assetPath('/projects/mission-adaptive-uav/outdoor.jpeg')} alt="URAN UAV during an outdoor flight test" />
              <figcaption>Outdoor flight test</figcaption>
            </figure>
            <figure className="gallery-item">
              <img src={assetPath('/projects/mission-adaptive-uav/indoor.png')} alt="URAN UAV during a controlled indoor test" />
              <figcaption>Controlled test environment</figcaption>
            </figure>
            <figure className="gallery-item">
              <img className="gallery-item__platform" src={assetPath('/projects/mission-adaptive-uav/platform.jpeg')} alt="URAN multirotor platform viewed from above" />
              <figcaption>Current multirotor platform</figcaption>
            </figure>
          </div>

          <div className="section-cta">
            <Link to="/projects/mission-adaptive-uav" className="btn-link">
              View the project details
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section join-section">
        <div className="container">
          <div className="join-card">
            <div className="join-content">
              <h2>Work With Us</h2>
              <p>
                Interested in UAV autonomy, robotics, or AI? We are open to conversations with students,
                researchers, and collaborators who want to work on meaningful aerial systems.
              </p>
            </div>
            <Link to="/contact" className="btn btn-accent">
              Contact Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
