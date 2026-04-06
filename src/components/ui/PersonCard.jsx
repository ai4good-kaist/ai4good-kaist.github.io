import { FaGlobe, FaEnvelope, FaGraduationCap, FaLinkedin } from 'react-icons/fa';
import { getInitials } from '../../utils/helpers';
import './PersonCard.css';

/**
 * Person card with photo (or initials fallback), name, role, and links.
 * Designed to be scannable and elegant, inspired by Stanford NLP people page.
 */
export default function PersonCard({ person }) {
  const { name, role, affiliation, interests, photo, links } = person;

  return (
    <div className="person-card">
      <div className="person-card__photo-wrapper">
        {photo ? (
          <img src={photo.startsWith('http') ? photo : `${import.meta.env.BASE_URL}${photo.startsWith('/') ? photo.slice(1) : photo}`} alt={name} className="person-card__photo" loading="lazy" />
        ) : (
          <div className="person-card__initials" aria-hidden="true">
            {getInitials(name)}
          </div>
        )}
      </div>

      <div className="person-card__info">
        <h3 className="person-card__name">{name}</h3>
        <p className="person-card__role">{role}</p>
        <p className="person-card__affiliation">{affiliation}</p>

        {interests && interests.length > 0 && (
          <div className="person-card__interests">
            {interests.map((interest) => (
              <span key={interest} className="tag">
                {interest}
              </span>
            ))}
          </div>
        )}

        {links && (
          <div className="person-card__links">
            {links.website && (
              <a href={links.website} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s website`} title="Website">
                <FaGlobe />
              </a>
            )}
            {links.email && (
              <a href={`mailto:${links.email}`} aria-label={`Email ${name}`} title="Email">
                <FaEnvelope />
              </a>
            )}
            {links.scholar && (
              <a href={links.scholar} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s Google Scholar`} title="Google Scholar">
                <FaGraduationCap />
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn`} title="LinkedIn">
                <FaLinkedin />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
