import { HiExternalLink } from 'react-icons/hi';
import './ResourceSection.css';

/**
 * A categorized section of resources with link list.
 */
export default function ResourceSection({ category }) {
  const { label, description, items } = category;

  return (
    <div className="resource-section">
      <h3 className="resource-section__title">{label}</h3>
      {description && <p className="resource-section__description">{description}</p>}

      <div className="resource-section__list">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-item"
          >
            <div className="resource-item__content">
              <h4 className="resource-item__title">
                {item.title}
                <HiExternalLink className="resource-item__icon" />
              </h4>
              <p className="resource-item__description">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
