import { Link } from 'react-router-dom';
import { HiCalendar, HiLocationMarker } from 'react-icons/hi';

import { siteConfig } from '../config/navigation';
import { news } from '../data/news';
import { events } from '../data/events';
import { formatDateRange } from '../utils/helpers';
import CardGrid from '../components/ui/CardGrid';
import NewsCard from '../components/ui/NewsCard';

/**
 * Home page — HCI@KAIST inspired.
 */
export default function Home() {
  const featuredEvents = events.filter((e) => e.type === 'upcoming').slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <video
          className="home-hero__bg-video"
          src={import.meta.env.BASE_URL + 'background.mp4'}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="home-hero__bg-overlay" />
        {/* ...기존 hero 내용이 있다면 여기에 추가... */}
      </section>

      {/* News */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">News</h2>
            <div className="section-header__underline"></div>
          </div>
          <CardGrid columns={1} style={{ gap: 'var(--space-10)' }}>
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Upcoming Events */}
      {featuredEvents.length > 0 && (
        <section className="section section--subtle">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="section-header">
              <h2 className="section-header__title">Upcoming Events</h2>
              <div className="section-header__underline"></div>
            </div>
            <div className="home-events-grid" style={{ maxWidth: '800px', margin: '0 auto var(--space-8) auto' }}>
              <CardGrid columns={1} style={{ gap: 'var(--space-4)' }}>
                {featuredEvents.map((event) => (
                  <div key={event.id} className="home-event-card">
                    <div className="home-event-card__date">
                      <span className="home-event-card__month">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="home-event-card__day">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div className="home-event-card__info">
                      <h3 className="home-event-card__title">{event.title}</h3>
                      <div className="home-event-card__meta">
                        <span><HiCalendar /> {formatDateRange(event.date, event.endDate)}</span>
                        <span><HiLocationMarker /> {event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardGrid>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link to="/events" className="btn btn--outline">View all Events</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
