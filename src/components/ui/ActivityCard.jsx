import { HiClock } from 'react-icons/hi';
import './ActivityCard.css';

/**
 * Activity card for recurring community activities.
 */
export default function ActivityCard({ activity }) {
  const { title, type, description, schedule, active } = activity;

  return (
    <div className={`activity-card${active ? '' : ' activity-card--inactive'}`}>
      <div className="activity-card__header">
        <span className={`activity-card__type tag${active ? ' tag--active' : ''}`}>{type}</span>
        {!active && <span className="activity-card__badge">On Pause</span>}
      </div>

      <h3 className="activity-card__title">{title}</h3>
      <p className="activity-card__description">{description}</p>

      <div className="activity-card__schedule">
        <HiClock />
        <span>{schedule}</span>
      </div>
    </div>
  );
}
