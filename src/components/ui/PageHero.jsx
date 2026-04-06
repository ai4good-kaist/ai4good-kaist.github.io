/**
 * Page hero banner component — HCI@KAIST style.
 * Centered title with a small green underline bar beneath it.
 */
export default function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="page-hero__title">{title}</h1>
        <div className="page-hero__underline" />
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
