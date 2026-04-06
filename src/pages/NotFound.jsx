import { Link } from 'react-router-dom';

/**
 * 404 Not Found page.
 */
export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__code">404</div>
      <h1 className="not-found__title">Page Not Found</h1>
      <p className="not-found__text">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn--primary">
        Back to Home
      </Link>
    </div>
  );
}
