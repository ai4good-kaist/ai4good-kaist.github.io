import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { siteConfig, navItems } from '../../config/navigation';

/**
 * Site-wide footer — HCI@KAIST style, dark blue-gray, minimal.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__col">
            <h4 className="footer__heading">{siteConfig.title}</h4>
            <nav className="footer__nav">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="footer__link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer__col footer__col--right">
            <div className="footer__social">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="footer__social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            COPYRIGHT &copy; {new Date().getFullYear()} {siteConfig.title}
          </span>
        </div>
      </div>
    </footer>
  );
}
