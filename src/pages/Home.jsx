import { Link } from 'react-router-dom';


import { siteConfig } from '../config/navigation';
import { news } from '../data/news';
import { events } from '../data/events';
import CardGrid from '../components/ui/CardGrid';
import NewsCard from '../components/ui/NewsCard';
import EventCard from '../components/ui/EventCard';

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
          muted={true}
          defaultMuted={true}
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
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Upcoming Events</h2>
              <div className="section-header__underline"></div>
            </div>
            <div className="home-events-list" style={{ marginBottom: 'var(--space-8)' }}>
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
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
