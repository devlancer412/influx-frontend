import {
  Categories,
  Regions,
  Chains,
  Attributes,
  Sorters,
  InfluenceStates,
} from '../constant';
export {};

declare global {
  interface Campaign {
    id: number;
    name: string;
    influencers: number;
    avgER: EngagementFilter;
    price: number;
    followers: number;
  }

  interface Influence {
    id: number;
    accountId: number;
    name: string;
    nickName: string;
    imageUrl: string;
    mainChannel: string;
    instagram?: any;
    youtube?: any;
    telegram?: any;
    twitter?: any;
    tiktok?: any;
    followers: number;
    engagement: EngagementFilter;
    language: LanguageFilter;
    topPrice: number;
    bottomPrice: number;
    isVIP: boolean;
    niches: string[];
    status?: InfluenceStatus;
  }

  type Category = typeof Categories[number];
  type Region = typeof Regions[number];
  type Chain = typeof Chains[number];
  type Attribute = typeof Attributes[number];

  interface LaunchSetting {
    name: string;
    setted: boolean;
    value: string;
    placeholder: string;
  }

  interface UserProfile {
    id: number;
    name: string;
    email: string;
    avatar: string;
    verified: boolean;
    language: LanguageFilter;
  }

  interface BrandProfile {
    id: number;
    account: UserProfile;
    website: string;
    description: string;
    channels: {
      twitter?: string;
      instagram?: string;
      discord?: string;
      youtube?: string;
      tiktok?: string;
    };
    mainTgChannel: string;
    category: Category | '';
    region: Region | '';
    chain: Chain | '';
    attribute: Attribute | '';
    esBudget: number;
    launchSettings: LaunchSetting[];
    isWL: boolean;
    isAirdrop: boolean;
    isPremint: boolean;
    loggedin?: boolean;
    isListed?: boolean;
    campaigns?: Campaign[];
  }

  type Billing = {
    name: string;
    price: number;
    per: string;
    discounted?: number;
    benifits: string[];
  };

  type SocialFilterProps = {
    iconUrl: string;
    title: string;
    selected: boolean;
  };

  type MenuProps = {
    title: string;
    iconUrl: string;
    url: string;
  };

  type PriceFilter = {
    top: number;
    bottom: number;
  };

  type EngagementFilter = typeof Engagements[number];

  type LanguageFilter = typeof Languages[number];

  type AudienceSizeFilter = typeof AudienceSizes[number];

  type AudienceLocationFilter = typeof AudienceLocations[number];

  type NicheFilter = typeof Niches[number];

  type SortFilter = typeof Sorters[number];

  type InfluenceStatus = typeof InfluenceStates[number];
}
