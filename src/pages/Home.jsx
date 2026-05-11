import { useState, useEffect, useCallback, useRef } from 'react';
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
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);
  const slides = [
    'workshop1.jpg',
    'workshop2.jpg',
  ];

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, [slides.length]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        {slides.map((src, index) => (
          <img
            key={src}
            className="home-hero__bg-image"
            src={import.meta.env.BASE_URL + src}
            alt={`Workshop ${index + 1}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 0,
            }}
          />
        ))}
        <div className="home-hero__bg-overlay" />

        {/* Slide Navigation Arrows */}
        <button
          className="home-hero__nav home-hero__nav--prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="home-hero__nav home-hero__nav--next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dot Indicators */}
        <div className="home-hero__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`home-hero__dot${index === currentSlide ? ' home-hero__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
