import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.js'
import './ProjectDetail.css'

function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return (
      <section className="project-not-found section">
        <div className="container">
          <span className="section-eyebrow">Project</span>
          <h1>Project not found</h1>
          <p>The project you are looking for is not available.</p>
          <Link to="/projects" className="btn btn-accent">Back to projects</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="project-detail-header">
        <div className="container project-detail-header__content">
          <Link to="/projects" className="project-detail-back">&larr; All projects</Link>
          <div className="project-detail-kicker">
            <span className="project-status">{project.status}</span>
            <span>URAN Research Group</span>
          </div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>

      <main className="project-detail-main">
        <div className="container">
          <section className="project-gallery" aria-label="Project images">
            {project.gallery.map((image) => (
              <figure className={`project-detail-image project-detail-image--${image.fit || 'cover'}`} key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={(event) => event.currentTarget.parentElement.classList.add('project-detail-image--empty')}
                />
                <div className="project-detail-image__fallback">
                  <span>Image slot</span>
                  <small>Add this image at {image.src}</small>
                </div>
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </section>

          <div className="project-detail-layout">
            <article className="project-detail-copy">
              <span className="section-eyebrow">Project overview</span>
              <h2>From a working aircraft to a research platform</h2>
              <p>{project.overview}</p>
              <p>{project.description}</p>

              <div className="project-research-question">
                <span>Research question</span>
                <p>{project.researchQuestion}</p>
              </div>
            </article>

            <aside className="project-detail-aside">
              <div className="project-detail-panel">
                <h3>Research themes</h3>
                <div className="project-card__themes">
                  {project.themes.map((theme) => <span key={theme}>{theme}</span>)}
                </div>
              </div>
              <div className="project-detail-panel">
                <h3>Current direction</h3>
                <ul>
                  {project.milestones.map((milestone) => <li key={milestone}>{milestone}</li>)}
                </ul>
              </div>
            </aside>
          </div>

          <section className="project-approach">
            <span className="section-eyebrow">How the work develops</span>
            <h2>Research through flight, evaluation, and iteration</h2>
            <div className="project-approach__grid">
              {project.approach.map((step, index) => (
                <article key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default ProjectDetail
