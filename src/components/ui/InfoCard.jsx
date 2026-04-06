import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

/**
 * Generic info card with icon, title, description, and optional link.
 */
export default function InfoCard({ icon, title, description, linkTo, linkLabel = 'Learn more' }) {
  const content = (
    <>
      {icon && <div className="info-card__icon">{icon}</div>}
      <h3 className="info-card__title">{title}</h3>
      <p className="info-card__description">{description}</p>
      {linkTo && (
        <span className="info-card__link">
          {linkLabel} <HiArrowRight />
        </span>
      )}
    </>
  );

  if (linkTo) {
    // Internal link
    if (linkTo.startsWith('/')) {
      return (
        <Link to={linkTo} className="info-card" style={{ textDecoration: 'none' }}>
          {content}
        </Link>
      );
    }
    // External link
    return (
      <a
        href={linkTo}
        className="info-card"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {content}
      </a>
    );
  }

  return <div className="info-card">{content}</div>;
}
