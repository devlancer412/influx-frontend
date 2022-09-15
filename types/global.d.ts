import {
  Categories,
  Regions,
  Chains,
  Attributes,
  EsBudgets,
} from '../constant';
export {};

declare global {
  interface Campaign {
    id: number;
    name: string;
    influencers: number;
    averageEngagementRate: 'Good' | 'Normal' | 'Bad';
    budget: number;
    potentialReach: number;
  }

  interface Influence {
    id: number;
    campaignId: number | null;
    name: string;
    nickName: string;
    imageUrl: string;
    youtube?: string;
    telegram?: string;
    twitter?: string;
    followers: number;
    er: 'Good' | 'Normal' | 'Bad';
    topPrice: number;
    bottomPrice: number;
    premium: boolean;
  }

  type Category = typeof Categories[number];
  type Region = typeof Regions[number];
  type Chain = typeof Chains[number];
  type Attribute = typeof Attributes[number];
  type ExBudget = typeof EsBudgets[number];

  interface LaunchSetting {
    name: string;
    setted: boolean;
    value: string;
    placeholder: string;
  }

  interface BrandProfile {
    name: string;
    avatar: string;
    website: string;
    description: string;
    channels: {
      twitter?: string;
      instagram?: string;
      discord?: string;
      youtube?: string;
    };
    mainTgChannel: string;
    category: Category | '';
    region: Region | '';
    chain: Chain | '';
    attribute: Attribute | '';
    esBudget: ExBudget | '';
    launchSettings: LaunchSetting[];
    isWL: boolean;
    isAirdrop: boolean;
    isPremint: boolean;
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
}
