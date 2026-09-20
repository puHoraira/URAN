import { useMemo, useState } from 'react'
import publications from '../data/publications.js'
import './Publications.css'

function Publications() {
  const years = useMemo(
    () => ['All', ...Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a)],
    [],
  )
  const [year, setYear] = useState('All')

  const filtered = year === 'All' ? publications : publications.filter((p) => p.year === year)

  return (
    <>
      {/* Page Header */}
      <section className="publications-header">
        <div className="publications-header-bg">
          <div className="publications-grid"></div>
        </div>
        
        <div className="container">
          <div className="publications-header-content">
            <h1>Research Publications</h1>
            <p className="publications-header-desc">
              A selection of our peer-reviewed work in robotics, autonomous systems, 
              and artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Content */}
      <section className="section publications-section">
        <div className="container">
          {/* Year Filter */}
          <div className="publications-filter">
            <div className="filter-label">Filter by year:</div>
            <div className="filter-buttons">
              {years.map((y) => (
                <button
                  key={y}
                  type="button"
                  className={`filter-btn${year === y ? ' filter-btn--active' : ''}`}
                  onClick={() => setYear(y)}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          {/* Publications List */}
          <div className="publications-list">
            {filtered.map((pub) => (
              <article className="publication-card" key={pub.title}>
                <div className="publication-year-badge">{pub.year}</div>
                
                <div className="publication-content">
                  <h3>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  </h3>
                  
                  <p className="publication-authors">{pub.authors}</p>
                  
                  <p className="publication-venue">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                    {pub.venue}
                  </p>

                  <div className="publication-actions">
                    <a href={pub.link} className="pub-link" target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      View Paper
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="publications-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <p>Verified group publications will appear here as the research record grows.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Publications
