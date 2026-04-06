import PageHero from '../components/ui/PageHero';
import ResourceSection from '../components/ui/ResourceSection';
import { resourceCategories } from '../data/resources';

/**
 * Resources page with categorized link sections.
 */
export default function Resources() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Curated tools, papers, datasets, and opportunities for the AI for social good community."
      />

      <section className="section">
        <div className="container">
          {/* Category jump nav */}
          <nav
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-10)',
              justifyContent: 'center',
            }}
            aria-label="Resource categories"
          >
            {resourceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="people-nav__link"
              >
                {cat.label}
              </a>
            ))}
          </nav>

          {/* Resource sections */}
          {resourceCategories.map((category) => (
            <div key={category.id} id={category.id} style={{ scrollMarginTop: '80px' }}>
              <ResourceSection category={category} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
