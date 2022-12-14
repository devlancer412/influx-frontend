export * from './selectInputStyle';

export const Categories = ['AAA', 'BBB'] as const;
export const Regions = ['United States'] as const;
export const Chains = ['ETH', 'BNB', 'SOL', 'MATIC'] as const;
export const Attributes = ['AAA', 'BBB'] as const;

export const PriceRanges = [
  '$0 - $250',
  '$250 - $1000',
  '$1000 - $2000',
  '$2000 - $5000',
];

export const Engagements = ['None', 'Great', 'Good', 'OK', 'Poor'] as const;

export const Languages = ['English', 'German', 'Russian'] as const;

export const AudienceSizes = [
  'All audience sizes',
  '0 - 10',
  '10 - 100',
  '100 - 1000',
  '1000 - 10,000',
  '10,000 - 100,000',
  '100,000 - 1,000,000',
  '1,000,000 - 10,000,000',
  '10,000,000 - 100,000,000',
] as const;

export const AudienceLocations = [
  'United States',
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
  'NFT',
  'GameFi',
  'Gambling',
  'Memecoin',
  'Metaverse',
  'DeFi',
  'Web3 Technology',
  'Launchpads',
  'Blockchain',
  'Music Platform',
  'Dex Swap',
  'Exchange',
  'Staking Pools',
  'Farming',
] as const;

export const Sorters = [
  'Audience size',
  'Engagement rate',
  'Price range',
] as const;

export const InfluenceStates = [
  'Not Contacted',
  'Outreached',
  'In Negotiation',
  'Waiting For PostDetails',
  'Payment Done',
  'Post Done',
  'Cancelled',
];

export const PromotionTypes = ['Paid Promo', 'May do Paid Promo'] as const;

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
