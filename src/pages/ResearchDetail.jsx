import { Link, useParams } from 'react-router-dom'
import research from '../data/research.js'
import './ResearchDetail.css'

function ResearchDetail() {
  const { researchId } = useParams()
  const area = research.find((item) => item.id === researchId)

  if (!area) {
    return (
      <section className="section research-detail-not-found">
        <div className="container">
          <span className="section-eyebrow">Research</span>
          <h1>Research area not found</h1>
          <p>This research direction is not available.</p>
          <Link to="/research" className="btn btn-accent">Back to research</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className={`research-detail-header${area.status === 'Current research' ? ' research-detail-header--current' : ''}`}>
        <div className="container research-detail-header__content">
          <Link to="/research" className="research-detail-back">&larr; All research areas</Link>
          <div className="research-detail-kicker">
            <span className="research-detail-status">{area.status}</span>
            <span>{area.category}</span>
          </div>
          <h1>{area.title}</h1>
          <p>{area.summary}</p>
        </div>
      </section>

      <main className="section research-detail-main">
        <div className="container research-detail-container">
          <div className="research-detail-layout">
            <article className="research-detail-copy">
              <span className="section-eyebrow">{area.status === 'Current research' ? 'Current work' : 'Possible direction'}</span>
              <h2>{area.status === 'Current research' ? 'From mission intent to physical flight' : 'An open direction for future work'}</h2>
              <p>{area.details}</p>

              {area.researchQuestion && (
                <div className="research-detail-question">
                  <span>Research question</span>
                  <p>{area.researchQuestion}</p>
                </div>
              )}
            </article>

            <aside className="research-detail-aside">
              <div className="research-detail-panel">
                <h3>Methods and tools</h3>
                <div className="research-detail-methods">
                  {area.methods.map((method) => <span key={method}>{method}</span>)}
                </div>
              </div>
              <div className="research-detail-panel research-detail-status-panel">
                <h3>Research status</h3>
                <p>{area.statusDetail}</p>
              </div>
            </aside>
          </div>

          {area.architecture && (
            <section className="research-detail-section">
              <span className="section-eyebrow">System organization</span>
              <h2>How the active system is organized</h2>
              <div className="research-detail-architecture">
                {area.architecture.map((stage, index) => (
                  <article key={stage}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{stage}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {area.systemNotes && (
            <section className="research-detail-section research-detail-notes">
              <span className="section-eyebrow">Implementation focus</span>
              <h2>What the work must demonstrate</h2>
              <ul>
                {area.systemNotes.map((note) => <li key={note}>{note}</li>)}
              </ul>
            </section>
          )}

          {area.status === 'Current research' && (
            <div className="research-detail-cta">
              <p>See the aircraft and field work connected to this research direction.</p>
              <Link to="/projects/mission-adaptive-uav" className="btn btn-accent">View active project</Link>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default ResearchDetail
