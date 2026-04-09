import { Link, NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { navItems, siteConfig } from '../../config/navigation';

/**
 * Dark navbar — HCI@KAIST style.
 * Logo + site title on left, ALL CAPS nav links on right, mint green active state.
 */
export default function Navbar({ onMobileMenuOpen }) {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={`${import.meta.env.BASE_URL}logo1.png`} alt="AI4GOOD Logo" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__title">
              <span style={{ fontWeight: '800', fontSize: '1.5rem', marginRight: '0.4rem' }}>AI4GOOD</span>
              <span style={{ fontSize: '1.2rem', fontWeight: '400' }}>| KAIST</span>
            </span>
            <span className="navbar__subtitle">Advancing AI for Social Good</span>
          </div>
        </Link>

        <div className="navbar__links">
          {navItems
            .filter((item) => item.path !== '/')
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
        </div>

        <button
          className="navbar__hamburger"
          onClick={onMobileMenuOpen}
          aria-label="Open navigation menu"
        >
          <HiMenu />
        </button>
      </div>
    </nav>
  );
}
