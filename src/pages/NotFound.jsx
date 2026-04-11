import { Link } from 'react-router-dom';

/**
 * 404 Not Found page.
 */
export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__code">404</div>
      <h1 className="not-found__title">Oops, nothing here!</h1>
      <p className="not-found__text">
        The page you're looking for doesn't exist.<br />
        But hey, at least there's this catchy song called{' '}
        <a href="https://youtu.be/3_l-UI4prVY" target="_blank" rel="noopener noreferrer">
          404
        </a>.
      </p>
      <Link to="/" className="btn btn--outline">
          Come Back Home :)
      </Link>
    </div>
  );
}
