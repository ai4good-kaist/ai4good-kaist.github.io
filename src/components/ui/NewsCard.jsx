import './NewsCard.css';

export default function NewsCard({ news, featured = false }) {
  return (
    <a
      href={news.link || '#'}
      target={news.link ? '_blank' : undefined}
      rel={news.link ? 'noopener noreferrer' : undefined}
      className={`news-card${featured ? ' news-card--featured' : ''}`}
    >
      <div className="news-card__img-wrap">
        {news.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${news.image}`}
            alt={news.title}
            className="news-card__img"
            loading="lazy"
          />
        ) : (
          <div className="news-card__img-placeholder" />
        )}
      </div>
      <div className="news-card__body">
        <span className="news-card__date">
          {news.date}
        </span>
        <h3 className="news-card__title">{news.title}</h3>
        <p className="news-card__desc">{news.content}</p>
      </div>
    </a>
  );
}
