import PageHero from '../components/ui/PageHero';
import EventCard from '../components/ui/EventCard';
import EmptyState from '../components/ui/EmptyState';
import { events } from '../data/events';

/**
 * Events page — upcoming events only.
 */
export default function Events() {
  const upcomingEvents = events.filter((e) => e.type === 'upcoming');

  return (
    <>
      <PageHero title="Events" />

      <section className="section">
        <div className="container">
          {upcomingEvents.length > 0 ? (
            <div className="events-list">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <EmptyState
              icon="📅"
              title="No upcoming events"
              description="Check back soon for new events."
            />
          )}
        </div>
      </section>
    </>
  );
}
