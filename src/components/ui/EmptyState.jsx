/**
 * Empty state placeholder used when a section has no data.
 */
export default function EmptyState({ icon = '📭', title = 'Nothing here yet', description = 'Check back later for updates.' }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">{icon}</div>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__description">{description}</p>
    </div>
  );
}
