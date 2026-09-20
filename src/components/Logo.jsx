import { Link } from 'react-router-dom'
import './Logo.css'

function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`}>
      <span className="logo__mark">
        UR<span className="logo__accent">A</span>N
      </span>
      <span className="logo__sub">UAV Research &amp; Autonomous Navigation</span>
    </Link>
  )
}

export default Logo
