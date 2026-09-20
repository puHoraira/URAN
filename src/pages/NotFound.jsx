import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found section">
      <div className="container">
        <p className="section-eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or may have moved.</p>
        <Link to="/" className="btn btn-accent">Return home</Link>
      </div>
    </section>
  )
}

export default NotFound
