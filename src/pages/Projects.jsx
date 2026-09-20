import { Link } from 'react-router-dom'
import projects from '../data/projects.js'
import './Projects.css'

function Projects() {
  return (
    <>
      <section className="projects-header">
        <div className="container projects-header__content">
          <h1>Active UAV Projects</h1>
          <p>
            Explore the aircraft, experiments, and software systems currently being developed by URAN.
          </p>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <div className="projects-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.id}>
                <div className="project-card__index">{String(index + 1).padStart(2, '0')}</div>
                <div className="project-card__body">
                  <div className="project-card__topline">
                    <span className="project-status">{project.status}</span>
                    <span className="project-card__label">Active project</span>
                  </div>
                  <h2>{project.title}</h2>
                  <p className="project-card__summary">{project.summary}</p>
                  <p>{project.description}</p>

                  <div className="project-card__themes">
                    {project.themes.map((theme) => <span key={theme}>{theme}</span>)}
                  </div>

                  <div className="project-card__milestones">
                    <h3>Current direction</h3>
                    <ul>
                      {project.milestones.map((milestone) => <li key={milestone}>{milestone}</li>)}
                    </ul>
                  </div>
                  <Link className="project-card__link" to={`/projects/${project.id}`}>
                    Open project details
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects