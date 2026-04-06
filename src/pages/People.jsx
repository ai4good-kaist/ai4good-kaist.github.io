import { FaGlobe, FaEnvelope } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import { people, PEOPLE_CATEGORIES } from '../data/people';

/**
 * People page — clean list layout grouped by category.
 */
export default function People() {
  const activeCategories = PEOPLE_CATEGORIES.filter(
    (cat) => people[cat.key] && people[cat.key].length > 0
  );

  return (
    <>
      <PageHero
        title="People"
        subtitle="Meet the faculty, researchers, students, and collaborators who make up our community."
      />

      <section className="section">
        <div className="container">
          <div className="people-list">
            {activeCategories.map((cat) => (
              <div key={cat.key} className="people-group">
                <h2 className="people-group__heading">
                  {cat.label}
                  <span className="people-group__count">{people[cat.key].length}</span>
                </h2>
                <div className="people-group__items">
                  {people[cat.key].map((person) => (
                    <div key={person.id} className="people-row">
                      <div className="people-row__main">
                        <span className="people-row__name">
                          {person.links?.website ? (
                            <a href={person.links.website} target="_blank" rel="noopener noreferrer">
                              {person.name}
                            </a>
                          ) : (
                            person.name
                          )}
                        </span>
                        {person.role && person.role !== 'Student' && person.role !== 'Faculty' && (
                          <span className="people-row__role">{person.role}</span>
                        )}
                      </div>
                      <div className="people-row__right">
                        <span className="people-row__affiliation">{person.affiliation}</span>
                        <div className="people-row__links">
                          {person.links?.website && (
                            <a href={person.links.website} target="_blank" rel="noopener noreferrer" title="Website">
                              <FaGlobe />
                            </a>
                          )}
                          {person.links?.email && (
                            <a href={`mailto:${person.links.email}`} title="Email">
                              <FaEnvelope />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
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
