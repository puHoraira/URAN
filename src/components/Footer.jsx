import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">
            UR<span className="footer__mark-accent">A</span>N
          </span>
          <p className="footer__sub">UAV Research and Autonomous Navigation</p>
          <p className="footer__addr">
            Department of Computer Science and Engineering
            <br />
            University of Dhaka
            <br />
            Dhaka-1000, Bangladesh
          </p>
        </div>

        <div className="footer__links">
          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/publications">Publications</Link></li>
              <li><Link to="/notices">Notices</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:mdabu-2021911202@cs.du.ac.bd">Email the group</a></li>
              <li><Link to="/contact">Collaborate with us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {year} URAN Research Group · University of Dhaka. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
