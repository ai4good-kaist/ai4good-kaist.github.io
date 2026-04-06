/**
 * Events data.
 * Each event has a `type` field: 'upcoming' or 'past'.
 * Featured events are displayed prominently on the Events page and Home page.
 */
export const events = [
  {
    id: 'evt-1',
    title: 'Community Workshop',
    date: '2026-04-18',
    endDate: '2026-04-19',
    location: 'KAIST',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'upcoming',
    featured: false,
    link: null,
  },
  {
    id: 'evt-2',
    title: 'Research Seminar',
    date: '2026-05-10',
    endDate: null,
    location: 'KAIST',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    type: 'upcoming',
    featured: false,
    link: null,
  },
  {
    id: 'evt-3',
    title: 'Guest Lecture',
    date: '2026-05-25',
    endDate: null,
    location: 'KAIST',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    type: 'upcoming',
    featured: false,
    link: null,
  },
];
