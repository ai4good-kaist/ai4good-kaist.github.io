import './NewsCard.css';

export default function NewsCard({ news, featured = false }) {
  return (
    <a
      href={news.link || '#'}
      target={news.link ? '_blank' : undefined}
      rel={news.link ? 'noopener noreferrer' : undefined}
      className={`news-card${featured ? ' news-card--featured' : ''}`}
    >

      <div className="news-card__body">
        <div className="news-card__meta">
          {news.category && <span className="tag tag--active">{news.category}</span>}
          <span className="news-card__date">{news.date}</span>
        </div>
        <h3 className="news-card__title">{news.title}</h3>
        <p className="news-card__desc">{news.content}</p>
      </div>
    </a>
  );
}
