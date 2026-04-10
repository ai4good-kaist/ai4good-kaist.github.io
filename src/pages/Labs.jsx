import { useState, useMemo } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import PageHero from '../components/ui/PageHero';
import { labs } from '../data/labs';
import { getInitials } from '../utils/helpers';

/**
 * Labs page — profile card grid with photo placeholder.
 */
export default function Labs() {
  const [activeDept, setActiveDept] = useState('All');

  const departments = useMemo(() => {
    const depts = [...new Set(labs.flatMap((lab) => lab.department.split(', ').map((d) => d.trim())))];
    depts.sort();
    return ['All', ...depts];
  }, []);

  const filteredLabs = activeDept === 'All'
    ? labs
    : labs.filter((lab) => lab.department.split(', ').map((d) => d.trim()).includes(activeDept));

  return (
    <>
      <PageHero title="Labs" />

      <section className="section">
        <div className="container">

          <div className="labs-filter">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`labs-filter__btn${activeDept === dept ? ' labs-filter__btn--active' : ''}`}
                onClick={() => setActiveDept(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="lab-grid">
            {filteredLabs.map((lab) => (
              <div key={lab.id} className="lab-card">
                <div className="lab-card__photo">
                  {lab.photo ? (
                    <img 
                      src={lab.photo.startsWith('http') ? lab.photo : `${import.meta.env.BASE_URL}${lab.photo.startsWith('/') ? lab.photo.slice(1) : lab.photo}`} 
                      alt={lab.pi} 
                      className="lab-card__img" 
                      loading="lazy" 
                      style={lab.photoStyle || {}} 
                    />
                  ) : (
                    <span className="lab-card__initials">{getInitials(lab.pi)}</span>
                  )}
                </div>
                <div className="lab-card__info">
                  <h3 className="lab-card__name">
                    {lab.link ? (
                      <a href={lab.link} target="_blank" rel="noopener noreferrer">
                        {lab.name} <HiExternalLink className="lab-card__ext" />
                      </a>
                    ) : (
                      lab.name
                    )}
                  </h3>
                  <p className="lab-card__pi">{lab.pi}</p>
                  <p className="lab-card__dept">{lab.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
