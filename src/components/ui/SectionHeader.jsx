/**
 * Section header with optional label and description.
 * HCI@KAIST style — centered title with small green underline.
 */
export default function SectionHeader({ title, label, description, align = 'center' }) {
  const className = `section-header${align === 'left' ? ' section-header--left' : ''}`;

  return (
    <div className={className}>
      {label && <div className="section-header__label">{label}</div>}
      <h2 className="section-header__title">{title}</h2>
      <div className="section-header__underline" />
      {description && <p className="section-header__description">{description}</p>}
    </div>
  );
}
