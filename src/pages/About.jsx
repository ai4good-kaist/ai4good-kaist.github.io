import PageHero from '../components/ui/PageHero';
import { HiOutlineMail, HiOutlineCalendar } from 'react-icons/hi';
import { FaSlack, FaFileAlt } from 'react-icons/fa';

/**
 * About page — HCI@KAIST style.
 * "Who We Are" intro, participation cards, coordinators table.
 */

const participationCards = [
  {
    icon: <HiOutlineMail />,
    title: 'Email us',
    description: 'E-mail our coordinator, ai4good@kaist.ac.kr',
    link: 'mailto:ai4good@kaist.ac.kr',
  },
  {
    icon: <FaSlack />,
    title: 'Slack',
    description: 'Join our Slack workspace for discussions',
    link: 'mailto:ai4good@kaist.ac.kr',
  },
  {
    icon: <HiOutlineCalendar />,
    title: 'Calendar',
    description: 'Subscribe to the AI4Good | KAIST public calendar',
    link: '#',
  },
  {
    icon: <FaFileAlt />,
    title: 'Annual Report',
    description: 'Download to read our annual report',
    link: '#',
  },
];

const coordinators = [
  {
    year: '2026',
    lead: 'TBD',
    seminar: '',
    workshop: '',
    social: '',
  },
  {
    year: '2025',
    lead: 'TBD',
    seminar: '',
    workshop: '',
    social: '',
  },
];

export default function About() {
  return (
    <>
      <PageHero title="About" />

      {/* Who We Are */}
      <section className="section">
        <div className="container about-block">
          <h2 className="about-block__heading">Who We Are</h2>
          <div className="about-block__body">
            <p>
              AI4Good | KAIST is a group of researchers at KAIST with the common vision of
              advancing AI for positive social impact. We come together for talks by AI
              researchers from near and far, internal workshops for sharing research progress,
              and social events small and big.
            </p>
            <p>
              Our members conduct research, organize events, and build tools that address
              challenges across healthcare, education, accessibility, sustainability, civic
              engagement, and beyond. We are united by the conviction that rigorous,
              responsible AI can be a powerful force for good.
            </p>
          </div>
        </div>
      </section>

      {/* Our Coordinators */}
      <section className="section section--alt">
        <div className="container about-block">
          <h2 className="about-block__heading">Our Coordinators</h2>
          <p className="about-block__sub">
            AI4Good | KAIST activities are organized and supported solely by volunteers.
          </p>
          <div className="about-table-wrap">
            <table className="about-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Lead</th>
                  <th>Seminar</th>
                  <th>Workshop</th>
                  <th>Social</th>
                </tr>
              </thead>
              <tbody>
                {coordinators.map((row) => (
                  <tr key={row.year}>
                    <td className="about-table__year">{row.year}</td>
                    <td>{row.lead}</td>
                    <td>{row.seminar || '—'}</td>
                    <td>{row.workshop || '—'}</td>
                    <td>{row.social || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="section">
        <div className="container about-block">
          <h2 className="about-block__heading">How to Participate?</h2>
          <div className="participate-grid">
            {participationCards.map((card) => (
              <a
                key={card.title}
                href={card.link}
                className="participate-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="participate-card__icon">{card.icon}</div>
                <h4 className="participate-card__title">{card.title}</h4>
                <p className="participate-card__desc">{card.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
