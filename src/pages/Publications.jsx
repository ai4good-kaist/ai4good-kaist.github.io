import { useState, useMemo } from 'react';
import PageHero from '../components/ui/PageHero';
import PublicationItem from '../components/ui/PublicationItem';
import { publications } from '../data/publications';
import { getUniqueYears } from '../utils/helpers';

/**
 * Publications page — year filter + grouped by year.
 */
export default function Publications() {
  const years = useMemo(() => getUniqueYears(publications), []);
  const [selectedYear, setSelectedYear] = useState(null);

  const grouped = useMemo(() => {
    const map = {};
    for (const pub of publications) {
      if (!map[pub.year]) map[pub.year] = [];
      map[pub.year].push(pub);
    }
    return map;
  }, []);

  const visibleYears = selectedYear ? [selectedYear] : years;

  return (
    <>
      <PageHero title="Publications" />

      <section className="section">
        <div className="container">
          <div className="pub-filter">
            <button
              className={`pub-filter__btn${selectedYear === null ? ' pub-filter__btn--active' : ''}`}
              onClick={() => setSelectedYear(null)}
            >
              All
            </button>
            {years.map((year) => (
              <button
                key={year}
                className={`pub-filter__btn${selectedYear === year ? ' pub-filter__btn--active' : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="pub-list">
            {visibleYears.map((year) => (
              <div key={year} className="pub-year-group">
                <h2 className="pub-year-group__heading">{year}</h2>
                <div className="pub-year-group__items">
                  {grouped[year].map((pub) => (
                    <PublicationItem key={pub.id} publication={pub} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
