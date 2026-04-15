export const musicLink =
  'https://songwhip.com/artist/ekke?fbclid=IwAR2e3HppUviP0UTOST9uu17WN530BrsC7pzWhqbJ1mZ7lP-edjtQZxpPIuQ';

export const socialLinks = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/itsekke/',
    icon: 'instagram',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@itsekke?lang=en',
    icon: 'tiktok',
  },
  {
    id: 'soundcloud',
    label: 'SoundCloud',
    href: 'https://soundcloud.com/itsekke',
    icon: 'soundcloud',
  },
  {
    id: 'spotify',
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/5PLFMpk4XHu8rdpKu4dIta',
    icon: 'spotify',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@itsekke',
    icon: 'youtube',
  },
  {
    id: 'apple',
    label: 'Apple Music',
    href: 'https://music.apple.com/ca/artist/ekke/1223175655?app=music&ign-mpt=uo%3D4',
    icon: 'apple',
  },
];

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/music', label: 'Music' },
  { to: '/videos', label: 'Videos' },
  { to: '/shows', label: 'Shows' },
  { to: '/press', label: 'Press' },
  { to: '/contact', label: 'Contact' },
];

export const imageAssignments = [
  {
    id: 'hero',
    src: '/images/2026-refresh/neon-portrait-blue.jpg',
    alt: 'Ekke posed in front of a bright neon sign.',
  },
  {
    id: 'heroSupport',
    src: '/images/2026-refresh/neon-window-reflection.jpg',
    alt: 'Ekke framed by a glowing neon window reflection.',
  },
  {
    id: 'featured',
    src: '/images/2026-refresh/neon-window-reflection.jpg',
    alt: 'Ekke turning away from a glowing neon storefront window.',
  },
  {
    id: 'daylight',
    src: '/images/2026-refresh/daylight-portrait-cream.jpg',
    alt: 'Ekke standing in a bright all-cream outfit outdoors.',
  },
  {
    id: 'livePrimary',
    src: '/images/2026-refresh/live-stage-point.jpg',
    alt: 'Ekke performing on stage and pointing into the crowd.',
  },
  {
    id: 'liveSecondary',
    src: '/images/2026-refresh/live-mic-purple.jpg',
    alt: 'Ekke holding a microphone under purple stage lighting.',
  },
  {
    id: 'liveCloseup',
    src: '/images/2026-refresh/live-closeup-red.jpg',
    alt: 'Ekke performing close to the camera under red and pink lighting.',
  },
];

export const heroData = {
  eyebrow: 'Accra to Vancouver',
  title: 'Ekke connects Accra and Vancouver with rap that feels cinematic, direct, and built to move.',
  lead:
    'Pronounced AyKay, Ekke builds records that can hold sharp bars, neon-lit mood, and stage-first energy in the same world. From Bizix collaborations to a Lil B feature, the catalog keeps moving without losing the core.',
  location:
    'Rapper, songwriter, and multidisciplinary artist working across records, visuals, live performance, podcast appearances, and cypher moments.',
  ctas: [
    {
      label: 'Listen Now',
      href: musicLink,
      type: 'primary',
      external: true,
    },
    {
      label: 'Watch Highlights',
      href: '/videos',
      type: 'secondary',
    },
    {
      label: 'Book Ekke',
      href: '/contact',
      type: 'secondary',
    },
  ],
};

export const featuredRelease = {
  eyebrow: 'Featured release',
  title: 'HDKN (feat. Bizix)',
  description:
    'HDKN is one of the strongest first stops in the catalog: a Bizix-linked record with enough bite, replay value, and visual energy to explain the project fast to both fans and first-time visitors.',
  imageId: 'featured',
  supportImageId: 'daylight',
  stats: [
    'Top entry point for new listeners',
    'Connected to one of the strongest video rollouts',
    'Part of the Bizix collaboration thread in the catalog',
  ],
  actions: [
    {
      label: 'Listen on SoundCloud',
      href: 'https://soundcloud.com/itsekke/hdkn-feat-bizix',
      external: true,
    },
    {
      label: 'Watch the Video',
      href: 'https://www.youtube.com/watch?v=wfmNJaa9FYg',
      external: true,
    },
  ],
};

export const youtubeVideos = [
  {
    id: 'hdkn-video',
    title: 'HDKN music video',
    href: 'https://www.youtube.com/watch?v=wfmNJaa9FYg',
    videoId: 'wfmNJaa9FYg',
    type: 'Featured video',
    featured: true,
    note: 'The clearest video entry point into the current Ekke world.',
    related: 'HDKN (feat. Bizix)',
  },
  {
    id: 'visual-two',
    title: 'Second-biggest music video',
    href: 'https://www.youtube.com/watch?v=jynFGRlWTBU',
    videoId: 'jynFGRlWTBU',
    type: 'Visual follow-up',
    featured: false,
    note: 'A second visual proof point that widens the feel of the catalog quickly.',
    related: 'YouTube visual',
  },
  {
    id: 'lil-b-collab',
    title: '4CAST with Lil B',
    href: 'https://www.youtube.com/watch?v=zVYdPjNh5VU',
    videoId: 'zVYdPjNh5VU',
    type: 'Collaboration',
    featured: false,
    note: 'A major collaboration that gives new visitors instant context and credibility.',
    related: '4CAST',
  },
  {
    id: 'podcast-feature',
    title: 'Podcast feature',
    href: 'https://www.youtube.com/watch?v=aubsAGgbldI',
    videoId: 'aubsAGgbldI',
    type: 'Conversation',
    featured: false,
    note: 'Lets visitors see the project in conversation, not just in release mode.',
    related: 'Podcast',
  },
  {
    id: 'cypher-appearance',
    title: 'Cypher appearance',
    href: 'https://www.youtube.com/watch?v=KHLK5E5Kf78',
    videoId: 'KHLK5E5Kf78',
    type: 'Bars first',
    featured: false,
    note: 'Strong proof for rap listeners who want to hear the pen and presence directly.',
    related: 'Cypher',
  },
];

export const topTracks = [
  {
    title: 'HDKN (feat. Bizix)',
    note: 'A strong front door into the project and one of the clearest bridges between the records and the visuals.',
    href: 'https://soundcloud.com/itsekke/hdkn-feat-bizix',
    imageId: 'heroSupport',
    tag: 'Top track',
  },
  {
    title: '4CAST (feat. Lil B)',
    note: 'The biggest-name collaboration in the catalog, and a smart credibility cue for first-time listeners.',
    href: 'https://soundcloud.com/itsekke/4cast-gm-master2-48k24',
    imageId: 'livePrimary',
    tag: 'Featured artist',
  },
  {
    title: 'BKE',
    note: 'A punchier record to pair with the bigger marquee moments and give the page more range.',
    href: 'https://soundcloud.com/itsekke/bke',
    imageId: 'daylight',
    tag: 'Fan favorite',
  },
  {
    title: 'CAMERAZ',
    note: 'Another Bizix-threaded cut that helps connect the wider collaboration ecosystem around Ekke.',
    href: 'https://soundcloud.com/itsekke/cameraz-prod-bizix',
    imageId: 'liveSecondary',
    tag: 'Visual energy',
  },
];

export const liveClips = [
  {
    id: 'live-clip-1',
    title: 'Live clip 01',
    path: '/videos/live/ekke-live-clip-1.mp4',
    orientation: 'landscape',
    performanceDate: 'Date TBC',
    note: 'Performance date will be updated once confirmed.',
    showId: 'show-1',
  },
  {
    id: 'live-clip-2',
    title: 'Live clip 02',
    path: '/videos/live/ekke-live-clip-2.mp4',
    orientation: 'landscape',
    performanceDate: 'Date TBC',
    note: 'Performance date will be updated once confirmed.',
    showId: 'show-2',
  },
  {
    id: 'live-clip-3',
    title: 'Live clip 03',
    path: '/videos/live/ekke-live-clip-3.mp4',
    orientation: 'landscape',
    performanceDate: 'Date TBC',
    note: 'Performance date will be updated once confirmed.',
    showId: 'show-3',
  },
  {
    id: 'live-clip-4',
    title: 'Live clip 04',
    path: '/videos/live/ekke-live-clip-4.mp4',
    orientation: 'portrait',
    performanceDate: 'Date TBC',
    note: 'Performance date will be updated once confirmed.',
    showId: 'show-4',
  },
];

export const pastShows = [
  {
    id: 'show-1',
    title: 'Past show archive 01',
    date: 'Date TBC',
    venue: 'Venue TBC',
    city: 'City TBC',
    note: 'Associated with the first approved live clip and ready for the confirmed date.',
  },
  {
    id: 'show-2',
    title: 'Past show archive 02',
    date: 'Date TBC',
    venue: 'Venue TBC',
    city: 'City TBC',
    note: 'Associated with the second approved live clip and ready for the confirmed date.',
  },
  {
    id: 'show-3',
    title: 'Past show archive 03',
    date: 'Date TBC',
    venue: 'Venue TBC',
    city: 'City TBC',
    note: 'Associated with the third approved live clip and ready for the confirmed date.',
  },
  {
    id: 'show-4',
    title: 'Past show archive 04',
    date: 'Date TBC',
    venue: 'Venue TBC',
    city: 'City TBC',
    note: 'Associated with the fourth approved live clip and ready for the confirmed date.',
  },
];

export const platformLinks = [
  { label: 'Spotify', href: 'https://open.spotify.com/artist/5PLFMpk4XHu8rdpKu4dIta' },
  { label: 'Apple Music', href: 'https://music.apple.com/ca/artist/ekke/1223175655?app=music&ign-mpt=uo%3D4' },
  { label: 'SoundCloud', href: 'https://soundcloud.com/itsekke' },
  { label: 'YouTube', href: 'https://www.youtube.com/@itsekke' },
  { label: 'Songwhip', href: musicLink },
];

export const pressFacts = [
  'Pronounced AyKay',
  'Accra and Vancouver roots',
  'Rap at the center with room for left-field production',
  'Featured collaboration with Lil B',
  'Open for bookings, collaborations, and media opportunities',
];

export const bios = {
  short:
    'Ekke is a rapper and multidisciplinary artist connecting Accra and Vancouver through sharp writing, flexible production choices, and a visual language that makes each release feel like part of a larger world.',
  medium:
    'Ekke makes rap that can hold direct writing, cinematic mood, and left-field production choices without losing focus. The project moves between Bizix collaborations, standout records like HDKN, a Lil B feature on 4CAST, music-video rollouts, podcast appearances, and cypher moments that prove the bars can stand on their own. The result is an artist platform designed for listeners, curators, and bookers who want a voice with identity instead of something interchangeable.',
};

export const bookingInfo = {
  email: 'ekke.music.gh@gmail.com',
  summary:
    'For bookings, festival slots, interviews, and collaborations, send the city, date, budget range, and a short brief.',
  note:
    'For venue bookings, festival slots, media features, or creative collaborations, include the city, proposed date, budget range, and a short brief so the reply can move faster.',
  listHref: '/#newsletter',
};

export const newsletterConfig = {
  provider: 'buttondown',
  status: 'pending',
  actionUrl: '',
  heading: 'Join the list before the next rollout lands.',
  description:
    'Get release drops, live updates, and first notice when the next phase of the Ekke site and mailing list goes live.',
  placeholder: 'Enter your email',
  submitLabel: 'Join the list',
  pendingNote:
    'Buttondown will be connected during launch prep. The form is in place and ready for the final publication details.',
  successMessage:
    'You are on the list. Check your inbox for confirmation and future updates.',
  errorMessage:
    'That signup did not go through. Try again once the Buttondown details are connected.',
};

export const pageCopy = {
  home: {
    watch: {
      eyebrow: 'Watch',
      title: 'Start with the visuals that explain the world fastest.',
      description:
        'The video side of the project should feel easy to scan: one strongest lead plus the collaborations, podcast moments, and rap-first proof that make the catalog feel lived in.',
    },
    live: {
      eyebrow: 'Live proof',
      title: 'Real stage energy belongs on the homepage too.',
      description:
        'The site should not make visitors guess whether the music translates live. A compact live strip keeps proof of performance visible and sends anyone interested to the full archive.',
      ctaLabel: 'Open the full shows archive',
    },
    music: {
      eyebrow: 'Music',
      title: 'Lead with the records people should hear first.',
      description:
        'The strongest artist sites do not just link outward. They tell visitors which records are the clearest way in, then make every major platform one tap away.',
    },
    booking: {
      eyebrow: 'Bookings + updates',
      title: 'Built for listeners, bookers, and collaborators.',
      description:
        'The site should feel equally useful to someone finding the music for the first time and to someone trying to book a show, line up a feature, or stay close to the next release.',
    },
  },
  music: {
    intro: {
      eyebrow: 'Music',
      title: 'Start with the records that open the world up fastest.',
      description:
        'This page gives streaming-first visitors a cleaner path through the catalog: one featured release, a few strong entry points, and direct links to every major platform already in rotation.',
    },
    tracks: {
      eyebrow: 'Top tracks',
      title: 'Lead with the songs people should hear first.',
      description:
        'The catalog should feel curated, not dumped into a list. These tracks give new listeners a fast read on range, collaboration, and replay value.',
    },
    platforms: {
      eyebrow: 'Platforms',
      title: 'Listen wherever you already are.',
    },
  },
  videos: {
    intro: {
      eyebrow: 'Videos',
      title: 'A selective embed for the strongest visual, then clean links for the rest.',
      description:
        'The site keeps one featured YouTube embed in the main video experience, then lets the supporting music videos, collaborations, podcast moments, and cypher footage stay fast and tidy as outbound cards.',
    },
    support: {
      eyebrow: 'More to watch',
      title: 'Keep the rest of the video archive easy to scan.',
      description:
        'Not every video needs to be embedded. The supporting grid stays light, readable, and ready to send people to the platform where those videos already live.',
    },
  },
  shows: {
    intro: {
      eyebrow: 'Shows',
      title: 'Past performances, live-proof clips, and booking-ready context.',
      description:
        'Even before all the dates are confirmed, the shows page should prove the project performs live, give space for the archive, and stay ready for real show details as they come in.',
    },
    archive: {
      eyebrow: 'Past shows',
      title: 'The archive is ready for confirmed dates and venues.',
      description:
        'These entries are placeholders for now, but the structure is already in place for a proper past-shows list instead of an empty page.',
    },
    clips: {
      eyebrow: 'Live clips',
      title: 'Local clips keep the performance proof on-site.',
      description:
        'These approved clips live inside the project so the site can show real performance energy without sending every visitor somewhere else.',
    },
  },
  press: {
    intro: {
      eyebrow: 'Press',
      title: 'Press-ready context for curators, bookers, and collaborators.',
      description:
        'This page works like a lightweight EPK center of gravity: fast facts, usable bios, visual context, and direct links that explain the project in minutes.',
    },
    facts: {
      eyebrow: 'Quick facts',
      title: 'The essentials someone can scan in under a minute.',
    },
  },
  contact: {
    intro: {
      eyebrow: 'Contact',
      title: 'Bookings, collaborations, press, and creative opportunities.',
      description:
        'The contact page should tell venues, interviewers, collaborators, and curators exactly how to reach out and what to include, instead of stopping at an email address.',
    },
  },
};

export const pressLinks = [
  {
    label: 'Watch HDKN',
    href: 'https://www.youtube.com/watch?v=wfmNJaa9FYg',
  },
  {
    label: 'Watch 4CAST with Lil B',
    href: 'https://www.youtube.com/watch?v=zVYdPjNh5VU',
  },
  {
    label: 'Listen on SoundCloud',
    href: 'https://soundcloud.com/itsekke',
  },
  {
    label: 'Open Spotify',
    href: 'https://open.spotify.com/artist/5PLFMpk4XHu8rdpKu4dIta',
  },
];

export const footerLinks = [
  { label: 'Music', to: '/music' },
  { label: 'Videos', to: '/videos' },
  { label: 'Shows', to: '/shows' },
  { label: 'Press', to: '/press' },
  { label: 'Contact', to: '/contact' },
];
