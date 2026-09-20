import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
  { to: '/publications', label: 'Publications' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const updateLinks = [
  { to: '/notices', label: 'Notices' },
  { to: '/news', label: 'News' },
  { to: '/gallery', label: 'Gallery' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [updatesOpen, setUpdatesOpen] = useState(false)

  function closeMenus() {
    setOpen(false)
    setUpdatesOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo />

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
              onClick={closeMenus}
            >
              {link.label}
            </NavLink>
          ))}
          <div className={`navbar__menu${updatesOpen ? ' navbar__menu--open' : ''}`}>
            <button
              type="button"
              className="navbar__link navbar__menu-button"
              aria-expanded={updatesOpen}
              aria-haspopup="true"
              onClick={() => setUpdatesOpen((value) => !value)}
            >
              Updates
              <span aria-hidden="true">⌄</span>
            </button>
            <div className="navbar__submenu">
              {updateLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className="navbar__submenu-link" onClick={closeMenus}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/contact" className="btn btn--primary navbar__cta" onClick={closeMenus}>
            Join Us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
