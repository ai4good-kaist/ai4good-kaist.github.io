import { HiCalendar, HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { formatDateRange } from '../../utils/helpers';
import './EventCard.css';

/**
 * Event card with date badge, title, location, and description.
 */
export default function EventCard({ event }) {
  const { title, date, endDate, location, description, link } = event;

  return (
    <div className="event-card">
      <div className="event-card__date-col">
        <div className="event-card__month">
          {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
        </div>
        <div className="event-card__day">
          {new Date(date).getDate()}
        </div>
      </div>

      <div className="event-card__content">
        <h3 className="event-card__title">{title}</h3>

        <div className="event-card__details">
          <span className="event-card__detail">
            <HiCalendar /> {formatDateRange(date, endDate)}
          </span>
          <span className="event-card__detail">
            <HiLocationMarker /> {location}
          </span>
        </div>

        <p className="event-card__description">{description}</p>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--outline">
            <HiExternalLink /> Register / Details
          </a>
        )}
      </div>
    </div>
  );
}
