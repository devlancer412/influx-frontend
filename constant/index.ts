export * from './selectInputStyle';

export const Categories = ['AAA', 'BBB'] as const;
export const Regions = ['AAA', 'BBB'] as const;
export const Chains = ['AAA', 'BBB'] as const;
export const Attributes = ['AAA', 'BBB'] as const;
export const EsBudgets = ['AAA', 'BBB'] as const;

export const PriceRanges = [
  '$0 - $250',
  '$250 - $1000',
  '$1000 - $2000',
  '$2000 - $5000',
];

export const Engagements = ['Ok', 'Cancel'] as const;

export const Languages = ['English', 'German', 'Russian'] as const;

export const AudienceSizes = [
  '0 - 1000',
  '1000 - 2000',
  '2000 - 3000',
  '3000 - 4000',
  '4000 - 5000',
  '5000 +',
] as const;

export const AudienceLocations = [
  'United State',
  'Canada',
  'Mexico',
  'Singapore',
  'United Kingdom',
  'German',
  'Russia',
  'China',
  'Hong Kong',
  'Ukraine',
] as const;

export const Niches = [
  'Lorem ipsum0',
  'Lorem ipsum1',
  'Lorem ipsum2',
  'Lorem ipsum3',
  'Lorem ipsum4',
  'Lorem ipsum5',
  'Lorem ipsum6',
  'Lorem ipsum7',
  'Lorem ipsum8',
] as const;

export const Sorters = [
  'Audience size',
  'Engagement rate',
  'Price range',
] as const;

export const initSocialFilters: SocialFilterProps[] = [
  {
    iconUrl: '/icons/twitter.png',
    title: 'twitter',
    selected: false,
  },
  {
    iconUrl: '/icons/instagram.png',
    title: 'instagram',
    selected: false,
  },
  {
    iconUrl: '/icons/telegram.png',
    title: 'telegram',
    selected: false,
  },
  {
    iconUrl: '/icons/youtube.png',
    title: 'youtube',
    selected: false,
  },
  {
    iconUrl: '/icons/tiktok.png',
    title: 'tiktok',
    selected: false,
  },
];
