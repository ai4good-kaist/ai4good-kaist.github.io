import { NavLink } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import { navItems, siteConfig } from '../../config/navigation';

/**
 * Mobile slide-out navigation drawer.
 * Renders an overlay + side panel when open.
 */
export default function MobileNav({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-nav-overlay${isOpen ? ' mobile-nav-overlay--open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`mobile-nav${isOpen ? ' mobile-nav--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-nav__header">
          <span className="mobile-nav__title">{siteConfig.title}</span>
          <button
            className="mobile-nav__close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <HiX />
          </button>
        </div>

        <nav className="mobile-nav__links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`
              }
              end={item.path === '/'}
              onClick={onClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
