import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import research from '../data/research.js'
import './Research.css'

function Research() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(research.map((area) => area.category)))],
    [],
  )
  const filteredResearch = activeCategory === 'All'
    ? research
    : research.filter((area) => area.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="research-header">
        <div className="research-header-bg">
          <div className="research-grid"></div>
        </div>
        
        <div className="container">
          <div className="research-header-content">
            <h1>Our Research Areas</h1>
            <p className="research-header-desc">
              URAN studies the full path from mission intent to physical flight. Our first active direction
              focuses on mission-adaptive edge intelligence; the wider themes remain open opportunities for
              future students and collaborators.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section research-areas-section">
        <div className="container">
          <div className="research-filter" aria-label="Filter research areas">
            <span className="research-filter__label">Explore by theme</span>
            <div className="research-filter__buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-btn${activeCategory === category ? ' filter-btn--active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="research-areas-list">
            {filteredResearch.map((area, index) => (
              <article
                className={`research-area-card${area.status === 'Current research' ? ' research-area-card--current' : ''}`}
                id={area.id}
                key={area.id}
              >
                <div className="research-area-header">
                  <div className="research-area-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="research-area-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {area.status === 'Current research' ? <path d="M20 6 9 17l-5-5"/> : <circle cx="12" cy="12" r="9"/>}
                    </svg>
                    <span>{area.status}</span>
                  </div>
                </div>

                <div className="research-area-content">
                  <h2>{area.title}</h2>
                  <p>{area.summary}</p>
                  <p className="research-area-status-detail">{area.statusDetail}</p>
                  
                  <div className="research-area-meta">
                    <div className="meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      <span>{area.status === 'Current research' ? 'Being explored now' : 'Open to a future researcher'}</span>
                    </div>
                    <div className="research-methods">
                      {area.methods.map((method) => <span key={method}>{method}</span>)}
                    </div>
                  </div>

                </div>

                <Link className="research-area-toggle" to={`/research/${area.id}`}>
                  View details
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section research-cta-section">
        <div className="container">
          <div className="research-cta-card">
            <h2>Interested in Collaborating?</h2>
            <p>
              We welcome collaboration opportunities with researchers, institutions, and industry 
              partners working on autonomous systems and aerial robotics.
            </p>
            <Link to="/contact" className="btn btn-accent">
              Get in Touch
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

export default Research
