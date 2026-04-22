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
          {news.source && <span className="news-card__source">{news.source}</span>}
          {news.source && <span className="news-card__divider">·</span>}
          {news.category && !news.source && <span className="tag tag--active">{news.category}</span>}
          <span className="news-card__date">{news.date}</span>
        </div>
        <h3 className="news-card__title">{news.title}</h3>
        {news.korean_title && <p className="news-card__subtitle">{news.korean_title}</p>}
        <div className="news-card__content">
          <p className="news-card__desc">{news.content}</p>
          {news.image && (
            <div className="news-card__img-wrap">
              <img src={news.image.startsWith('http') ? news.image : `${import.meta.env.BASE_URL}${news.image.startsWith('/') ? news.image.slice(1) : news.image}`} alt="" className="news-card__img" />
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
