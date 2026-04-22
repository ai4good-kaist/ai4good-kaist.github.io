/**
 * Events data.
 * Each event has a `type` field: 'upcoming' or 'past'.
 * Featured events are displayed prominently on the Events page and Home page.
 */
export const events = [
  {
    id: 'evt-kickoff',
    title: 'Kick-off Workshop',
    date: '2026-04-20T15:00:00',
    endDate: '2026-04-20T18:00:00',
    location: 'Daejeon Campus',
    description: 
`[Tentative Program]
• Opening remarks
• AI for sustainability (Haewon Jeon, Hyunwoo Kim)
• AI for education (Soyeon Ahn, Juho Kim)
• AI for mental health (Dooyoung Jung, Hwajung Hong)
• Closing`,
    image: '/img/kickoff-poster.jpg',
    type: 'upcoming',
    featured: true,
    link: null,
  }
];
