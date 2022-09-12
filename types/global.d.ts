export {};

declare global {
  interface Campaign {
    id: number;
    name: string;
    influencers: number;
    averageEngagementRate: 'Good' | 'Normal' | 'Bad';
    budget: number;
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
}
