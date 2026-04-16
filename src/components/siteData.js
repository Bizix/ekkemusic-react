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
  { to: '/merch', label: 'Merch', disabled: true },
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
  eyebrow: 'Accra | Vancouver',
  title: 'Sharp writing, dark pressure, and a live presence that carries',
  lead:
    "Pronounced AyKay, Ekke is a rapper, songwriter, and multidisciplinary artist building across records, videos, cyphers, and live sets. From Bizix-linked records to 4CAST featuring Lil B, the writing stays front and center.",
  location:
    'Rap-first music with a visual world that moves between Accra and Vancouver.',
  ctas: [
    {
      label: 'Play the catalog',
      href: musicLink,
      type: 'primary',
      external: true,
    },
    {
      label: 'Watch the vids',
      href: '/videos',
      type: 'secondary',
    },
    {
      label: 'Press + contact',
      href: '/contact',
      type: 'secondary',
    },
  ],
};

export const featuredRelease = {
  eyebrow: 'Featured release',
  title: 'HDKN (feat. Bizix)',
  description:
    'HDKN locks into a dark beat and keeps the tension high from the first bar. Ekke and Bizix sound sharp, fully in sync, and the visual gives the record the same controlled intensity.',
  imageId: 'featured',
  supportImageId: 'daylight',
  stats: [
    'Dark production with real pressure from the first seconds',
    'Ekke and Bizix at their most locked in',
    'A video that matches the record bar for bar',
  ],
  actions: [
    {
      label: 'Play HDKN',
      href: 'https://soundcloud.com/itsekke/hdkn-feat-bizix',
      external: true,
    },
    {
      label: 'Watch HDKN',
      href: 'https://www.youtube.com/watch?v=wfmNJaa9FYg',
      external: true,
    },
  ],
};

export const youtubeVideos = [
  {
    id: 'hdkn-video',
    title: 'HDKN',
    href: 'https://www.youtube.com/watch?v=wfmNJaa9FYg',
    videoId: 'wfmNJaa9FYg',
    type: 'MV',
    featured: true,
    note: 'The visual that sets the tone fastest: dark, tense, and fully locked into the world of the record.',
    related: 'HDKN (feat. Bizix)',
  },
  {
    id: 'visual-two',
    title: 'CAMERAZ',
    href: 'https://www.youtube.com/watch?v=jynFGRlWTBU',
    videoId: 'jynFGRlWTBU',
    type: 'MV',
    featured: false,
    note: 'A faster, more aggressive visual that pushes the pace up and keeps the Bizix connection moving.',
    related: 'CAMERAZ',
  },
  {
    id: 'lil-b-collab',
    title: '4CAST feat. Lil B',
    href: 'https://www.youtube.com/watch?v=zVYdPjNh5VU',
    videoId: 'zVYdPjNh5VU',
    type: 'COLLAB',
    featured: false,
    note: "A collaboration piece with wider reach, anchored by Ekke's writing and presence at the center of it.",
    related: '4CAST',
  },
  {
    id: 'podcast-feature',
    title: 'Show and Prove Podcast',
    href: 'https://www.youtube.com/watch?v=aubsAGgbldI',
    videoId: 'aubsAGgbldI',
    type: 'CONVO',
    featured: false,
    note: 'A conversation-led watch for people who want more voice, personality, and context around the artist.',
    related: 'Podcast',
  },
  {
    id: 'cypher-appearance',
    title: 'Cypher appearance',
    href: 'https://www.youtube.com/watch?v=KHLK5E5Kf78',
    videoId: 'KHLK5E5Kf78',
    type: 'Bars first',
    featured: false,
    note: 'For listeners who want the bars with no extra framing. Straight proof of pen, delivery, and presence.',
    related: 'Cypher',
  },
];

export const topTracks = [
  {
    title: 'HDKN (feat. Bizix)',
    note: "Dark, tense, and fully locked in. The quickest way to hear Ekke and Bizix hit their stride together.",
    href: 'https://soundcloud.com/itsekke/hdkn-feat-bizix',
    imageId: 'heroSupport',
    tag: 'START HERE',
  },
  {
    title: '4CAST (feat. Lil B)',
    note: "A heavier, more reflective cut. The Lil B feature adds reach, but Ekke's writing is what gives the record its weight.",
    href: 'https://soundcloud.com/itsekke/4cast-gm-master2-48k24',
    imageId: 'livePrimary',
    tag: 'FEATURE',
  },
  {
    title: 'BKE',
    note: 'A rhythm-first switch-up with real bounce. It shows how easily Ekke can move into a different pocket without losing sharpness.',
    href: 'https://soundcloud.com/itsekke/bke',
    imageId: 'daylight',
    tag: 'RANGE',
  },
  {
    title: 'CAMERAZ',
    note: 'Fast, urgent, and built to move. Hit this next if you want more pace, more attack, and more of the Bizix connection.',
    href: 'https://soundcloud.com/itsekke/cameraz-prod-bizix',
    imageId: 'liveSecondary',
    tag: 'ENERGY',
  },
];

export const liveClips = [
  {
    id: 'live-clip-1',
    title: 'Stage proof 01',
    path: '/videos/live/ekke-live-clip-1.mp4',
    orientation: 'landscape',
    startAt: 0.1,
    performanceDate: 'Date TBC',
    note: 'Performance date will be updated once confirmed.',
    showId: 'show-1',
  },
  {
    id: 'live-clip-2',
    title: 'Stage proof 02',
    path: '/videos/live/ekke-live-clip-2.mp4',
    orientation: 'landscape',
    performanceDate: 'Date TBC',
    note: 'Performance date will be updated once confirmed.',
    showId: 'show-2',
  },
  {
    id: 'live-clip-3',
    title: 'Stage proof 03',
    path: '/videos/live/ekke-live-clip-3.mp4',
    orientation: 'landscape',
    performanceDate: 'Date TBC',
    note: 'Performance date will be updated once confirmed.',
    showId: 'show-3',
  },
  {
    id: 'live-clip-4',
    title: 'Stage proof 04',
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

export const upcomingShows = [];

export const platformLinks = [
  { label: 'Spotify', href: 'https://open.spotify.com/artist/5PLFMpk4XHu8rdpKu4dIta' },
  { label: 'Apple Music', href: 'https://music.apple.com/ca/artist/ekke/1223175655?app=music&ign-mpt=uo%3D4' },
  { label: 'SoundCloud', href: 'https://soundcloud.com/itsekke' },
  { label: 'YouTube', href: 'https://www.youtube.com/@itsekke' },
  { label: 'Songwhip', href: musicLink },
];

export const pressFacts = [
  'Pronounced AyKay',
  'Built between Accra and Vancouver',
  'Rap-first writing with dark, left-field production choices',
  '4CAST features Lil B',
  'Available for bookings, collaborations, and media opportunities',
];

export const bios = {
  short:
    'Ekke is a rapper, songwriter, and multidisciplinary artist moving between Accra and Vancouver with sharp writing, dark production choices, and a live presence that carries the records off the screen and onto the stage.',
  medium:
    "Ekke makes rap that hits with direct writing, dark pressure, and a visual sense that gives the project real identity. Built between Accra and Vancouver, the catalog moves from Bizix-linked records like HDKN and CAMERAZ to 4CAST featuring Lil B, with the writing staying front and center throughout. Videos, cyphers, podcast appearances, and live clips all point to the same throughline: a voice with presence, control, and records that do not blur into the background.",
};

export const bookingInfo = {
  email: 'ekke.music.gh@gmail.com',
  summary:
    'Include the city, date, budget range, and a short brief so the next step is easy to make.',
  note:
    'For venue bookings, festival slots, media requests, or collaborations, send the core details clearly so the reply can move fast.',
  listHref: '/#newsletter',
};

export const newsletterConfig = {
  provider: 'buttondown',
  status: 'pending',
  actionUrl: '',
  heading: 'Join the list before the next drop lands',
  description:
    'Get release drops, live updates, and first notice when new music, videos, shows, and merch are on the way.',
  placeholder: 'Enter your email',
  submitLabel: 'Join the list',
  pendingNote:
    'Mailing list signup will be fully connected during launch prep.',
  successMessage:
    'You are on the list. Check your inbox for confirmation and future updates.',
  errorMessage:
    'That signup did not go through. Try again once the Buttondown details are connected.',
};

export const pageCopy = {
  home: {
    watch: {
      eyebrow: 'Watch',
      title: 'Watch the world take shape',
      description:
        'Start with HDKN, then move to CAMERAZ, 4CAST featuring Lil B, and the podcast appearance to see the music, the personality, and the visual range behind the project.',
    },
    live: {
      eyebrow: 'Live proof',
      title: 'The records hold up live too',
      description:
        'A quick look at how the music lands once it hits the room.',
      ctaLabel: 'See the live archive',
    },
    music: {
      eyebrow: 'Music',
      title: 'Four records that show what Ekke does best',
      description:
        'Start with HDKN for the pressure and Bizix chemistry, then move through 4CAST, BKE, and CAMERAZ for reflection, range, and pace.',
      platformsTitle: 'Pick your platform and keep listening',
    },
    booking: {
      eyebrow: 'Bookings + updates',
      title: 'Stay close to the next move',
      description:
        'Join the list for updates, or reach out directly for bookings, press, features, and real opportunities.',
    },
  },
  music: {
    intro: {
      eyebrow: 'Music',
      title: 'Four records that show what Ekke does best',
      description:
        'Begin with HDKN for the pressure and Bizix chemistry, move to 4CAST featuring Lil B for a more reflective turn, then hit BKE and CAMERAZ for bounce, pace, and attack.',
    },
    tracks: {
      eyebrow: 'Top tracks',
      title: 'The four records to play first',
      description:
        'These four tracks cover the core of the catalog: pressure, reflection, rhythmic range, and pure momentum.',
    },
    platforms: {
      eyebrow: 'Platforms',
      title: 'Pick your platform and keep listening',
    },
  },
  videos: {
    intro: {
      eyebrow: 'Videos',
      title: "The visual entry point into Ekke's world",
      description:
        'HDKN is the first watch. After that, move to 4CAST featuring Lil B, the podcast appearance, and the cypher for collaboration, personality, and straight bars.',
    },
    support: {
      eyebrow: 'More to watch',
      title: 'The rest of the archive shows the full scope',
      description:
        'These videos show Ekke from more angles: sharper collaborations, stronger presence on camera, and bars that do not need extra framing. Together, they make it clear this is a full world, not a one-off release.',
    },
  },
  shows: {
    intro: {
      eyebrow: 'Shows',
      title: 'Live proof that the records carry',
      description:
        'These clips show Ekke bringing the same pressure, control, and presence from the records onto the stage.',
    },
    archive: {
      eyebrow: '',
      title: '',
      description: '',
    },
    clips: {
      eyebrow: 'Clips',
      title: 'Live clips that show the records working in the room',
      description:
        'Short performance clips that show crowd energy, command, and how the records land once they hit the room.',
    },
  },
  press: {
    intro: {
      eyebrow: 'Press',
      title: 'The press-ready version of the project',
      description:
        'The clearest read on Ekke: the voice, the strongest proof points, the core bio, and the fastest way to reach out.',
    },
    facts: {
      eyebrow: 'Quick facts',
      title: 'The essentials, without the filler',
    },
  },
  contact: {
    intro: {
      eyebrow: 'Contact',
      title: 'Bookings, press, features, and real opportunities',
      description:
        'For shows, festival slots, interviews, features, and focused collaborations, reach out directly here.',
    },
  },
};

export const pressLinks = [
  {
    label: 'Watch HDKN',
    href: 'https://www.youtube.com/watch?v=wfmNJaa9FYg',
  },
  {
    label: 'Watch 4CAST feat. Lil B',
    href: 'https://www.youtube.com/watch?v=zVYdPjNh5VU',
  },
  {
    label: 'Listen on SoundCloud',
    href: 'https://soundcloud.com/itsekke',
  },
  {
    label: 'Listen on Spotify',
    href: 'https://open.spotify.com/artist/5PLFMpk4XHu8rdpKu4dIta',
  },
];

export const footerLinks = [
  { label: 'Music', to: '/music' },
  { label: 'Videos', to: '/videos' },
  { label: 'Shows', to: '/shows' },
  { label: 'Merch', to: '/merch', disabled: true },
  { label: 'Press', to: '/press' },
  { label: 'Contact', to: '/contact' },
];
