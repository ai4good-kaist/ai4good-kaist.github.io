import { FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import './PublicationItem.css';

/**
 * Publication entry with title, authors, venue, year, tags, and links.
 */
export default function PublicationItem({ publication }) {
  const { title, authors, venue, year, tags, abstract, links } = publication;

  return (
    <div className="pub-item">
      <div className="pub-item__year-badge">{year}</div>
      <div className="pub-item__content">
        <h3 className="pub-item__title">{title}</h3>
        <p className="pub-item__authors">{authors.join(', ')}</p>
        <p className="pub-item__venue">{venue}</p>

        {abstract && <p className="pub-item__abstract">{abstract}</p>}

        <div className="pub-item__meta">
          {tags && tags.length > 0 && (
            <div className="pub-item__tags">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="pub-item__links">
            {links?.paper && (
              <a href={links.paper} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--outline">
                <FaExternalLinkAlt /> Paper
              </a>
            )}
            {links?.pdf && (
              <a href={links.pdf} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--ghost">
                <FaFilePdf /> PDF
              </a>
            )}
            {links?.project && (
              <a href={links.project} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--ghost">
                <FaExternalLinkAlt /> Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
