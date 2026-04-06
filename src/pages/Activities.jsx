import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import CardGrid from '../components/ui/CardGrid';
import ActivityCard from '../components/ui/ActivityCard';
import { activities } from '../data/activities';

/**
 * Activities page showing recurring community activities.
 * Active activities are shown first, paused activities below.
 */
export default function Activities() {
  const activeActivities = activities.filter((a) => a.active);
  const pausedActivities = activities.filter((a) => !a.active);

  return (
    <>
      <PageHero
        title="Activities"
        subtitle="Recurring programs, reading groups, workshops, and initiatives you can join."
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Active Programs"
            description="Our currently running community activities. Everyone is welcome to participate."
          />
          <CardGrid columns={3}>
            {activeActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </CardGrid>
        </div>
      </section>

      {pausedActivities.length > 0 && (
        <section className="section section--subtle">
          <div className="container">
            <SectionHeader
              title="On Pause"
              description="These activities are temporarily paused and may resume in the future."
            />
            <CardGrid columns={3}>
              {pausedActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </CardGrid>
          </div>
        </section>
      )}
    </>
  );
}
