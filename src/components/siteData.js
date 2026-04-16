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
  title: 'Ekke brings sharp writing and live energy into one lane',
  lead:
    "Pronounced AyKay, Ekke is a rapper, songwriter, and multidisciplinary artist building across records, videos, cyphers, and live sets. The catalog runs from Bizix collaborations to Ekke's 4CAST featuring Lil B, with the writing staying front and center.",
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
      label: 'Watch the videos',
      href: '/videos',
      type: 'secondary',
    },
    {
      label: 'Bookings + press',
      href: '/contact',
      type: 'secondary',
    },
  ],
};

export const featuredRelease = {
  eyebrow: 'Featured release',
  title: 'HDKN (feat. Bizix)',
  description:
    'HDKN rides a dark, pressurized beat with the kind of tension that feels close to a late-night Street Fighter stage. The record is down right fierce, and the Bizix feature helps push that energy even harder.',
  imageId: 'featured',
  supportImageId: 'daylight',
  stats: [
    'Dark production with a locked-in, fight-night feel',
    'One of the clearest records for the Ekke and Bizix connection',
    'Backed by one of the strongest visuals in the catalog',
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
    note: 'EKKE x BIZIX = ⬇️ ➡️ 🔴',
    related: 'HDKN (feat. Bizix)',
  },
  {
    id: 'visual-two',
    title: 'CAMERAZ',
    href: 'https://www.youtube.com/watch?v=jynFGRlWTBU',
    videoId: 'jynFGRlWTBU',
    type: 'MV',
    featured: false,
    note: "LEMME TELL YOU 'BOUT A GOON / SO MANY CAMERAZ",
    related: 'CAMERAZ',
  },
  {
    id: 'lil-b-collab',
    title: '4CAST feat. Lil B',
    href: 'https://www.youtube.com/watch?v=zVYdPjNh5VU',
    videoId: 'zVYdPjNh5VU',
    type: 'COLLAB',
    featured: false,
    note: '#TYBG 🙏',
    related: '4CAST',
  },
  {
    id: 'podcast-feature',
    title: 'Show and Prove Podcast',
    href: 'https://www.youtube.com/watch?v=aubsAGgbldI',
    videoId: 'aubsAGgbldI',
    type: 'CONVO',
    featured: false,
    note: 'Shoutout to Icon Hip Hop',
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
    note: 'Dark, pressurized, and down right fierce. A clean way into the Ekke x Bizix lane.',
    href: 'https://soundcloud.com/itsekke/hdkn-feat-bizix',
    imageId: 'heroSupport',
    tag: 'Top track',
  },
  {
    title: '4CAST (feat. Lil B)',
    note: 'A legendary Lil B verse meets timely lyrics about the everyday struggle and oppression people live through.',
    href: 'https://soundcloud.com/itsekke/4cast-gm-master2-48k24',
    imageId: 'livePrimary',
    tag: 'COLLAB',
  },
  {
    title: 'BKE',
    note: "Dancey reggaeton vibes that show how easily Ekke can rap across different sounds without losing his voice.",
    href: 'https://soundcloud.com/itsekke/bke',
    imageId: 'daylight',
    tag: 'DIRECT HIT',
  },
  {
    title: 'CAMERAZ',
    note: 'A high-energy banger that pushes the pace up and keeps the catalog moving at full speed.',
    href: 'https://soundcloud.com/itsekke/cameraz-prod-bizix',
    imageId: 'liveSecondary',
    tag: 'DARK MOOD',
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
  'Accra and Vancouver roots',
  'Rap-first writing with dark, left-field production choices',
  "Lil B appears on Ekke's 4CAST",
  'Open for bookings, collaborations, and media opportunities',
];

export const bios = {
  short:
    'Ekke is a rapper, songwriter, and multidisciplinary artist moving between Accra and Vancouver with sharp writing, dark production choices, and a live presence that carries the records off the screen and onto the stage.',
  medium:
    "Ekke makes rap that hits with direct writing, dark pressure, and a visual sense that keeps the music feeling larger than one release cycle. The project moves between Accra and Vancouver, Bizix-linked records like HDKN and CAMERAZ, Ekke's 4CAST featuring Lil B, music-video rollouts, podcast appearances, cypher moments, and live clips that prove the records carry weight in real space. For curators, writers, and bookers, the throughline is simple: a voice with identity, presence, and records that do not blur into the background.",
};

export const bookingInfo = {
  email: 'ekke.music.gh@gmail.com',
  summary:
    'For bookings, interviews, features, and collaborations, send the city, date, budget range, and a short brief.',
  note:
    'For venue bookings, festival slots, media requests, or collaborations, include the city, proposed date, budget range, timeline, and a few lines on the opportunity.',
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
        'Start with HDKN, then move to CAMERAZ, 4CAST featuring Lil B, and the podcast appearance. Together they show the music, the presence, and the range behind the project.',
    },
    live: {
      eyebrow: 'Live proof',
      title: 'The records carry weight on stage too',
      description:
        'These clips show how the music lands in the room and lead into the full live archive.',
      ctaLabel: 'See the live archive',
    },
    music: {
      eyebrow: 'Music',
      title: 'Start with the records that hit hardest',
      description:
        'Start with HDKN for the dark pressure, move to 4CAST featuring Lil B, then hit BKE and CAMERAZ for more punch and range. Together they open the catalog up fast.',
      platformsTitle: "Listen where you're already at",
    },
    booking: {
      eyebrow: 'Bookings + updates',
      title: 'For listeners, bookers, and anyone paying close attention',
      description:
        'Use this section to stay close to the next move, reach out about a real opportunity, or get straight to the contact details without digging around.',
    },
  },
  music: {
    intro: {
      eyebrow: 'Music',
      title: 'Start with the records that open the catalog up fast',
      description:
        'If you are new here, start with HDKN for the dark pressure, 4CAST for the bigger-name feature, then move into BKE and CAMERAZ for more snap, range, and Bizix-threaded energy.',
    },
    tracks: {
      eyebrow: 'Top tracks',
      title: 'Four records that open the catalog up fast',
      description:
        'Each track here does a different job: HDKN sets the tone, 4CAST widens the frame, BKE adds a harder jab, and CAMERAZ keeps the mood and collaboration thread moving.',
    },
    platforms: {
      eyebrow: 'Platforms',
      title: 'Run the catalog on whatever platform you already use',
    },
  },
  videos: {
    intro: {
      eyebrow: 'Videos',
      title: 'Start with the visual that sets the tone fastest',
      description:
        'HDKN is the clearest first watch. After that, 4CAST featuring Lil B, the podcast appearance, and the cypher show different sides of the project without pulling away from the music.',
    },
    support: {
      eyebrow: 'More to watch',
      title: 'The rest of the archive fills the picture in',
      description:
        'The supporting videos show range: stronger collaborations, more conversation, and more bars. Together they make the catalog feel bigger than one release.',
    },
  },
  shows: {
    intro: {
      eyebrow: 'Shows',
      title: 'Shows, live clips, and proof that the records carry over',
      description:
        "This page shows how the music lands in real space: live clips, performance proof, and the start of Ekke's live archive.",
    },
    archive: {
      eyebrow: '',
      title: '',
      description: '',
    },
    clips: {
      eyebrow: 'Clips',
      title: 'Live clips, straight from the stage',
      description:
        'These clips show how the records land when they leave the screen and hit a room.',
    },
  },
  press: {
    intro: {
      eyebrow: 'Press',
      title: 'A fast read on the music, the voice, and why the project stands out',
      description:
        'Use this page when you need the project in a few sharp passes: who Ekke is, what the records feel like, where the strongest proof lives, and how to reach out without digging around.',
    },
    facts: {
      eyebrow: 'Quick facts',
      title: 'The essentials, without the filler',
    },
  },
  contact: {
    intro: {
      eyebrow: 'Contact',
      title: 'Bookings, features, press, and serious collaborations',
      description:
        'For shows, festival slots, interviews, features, and other real opportunities, reach out directly. The clearer the ask, the faster the reply.',
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
    label: 'Open Spotify',
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
