export interface Creator {
  id: number;
  name: string;
  handle: string;
  niche: string;
  avatar: string;
  followers: number;
  engagementRate: number;
  trustRank: number;
  avgViews: number;
  location: string;
  pastBrands: string[];
  priceRange: string;
  minBudget: number;
}

export interface ROIPrediction {
  predictedReach: number;
  predictedROI: number;
  matchScore: number;
  estimatedClicks: number;
  confidence: 'High' | 'Medium' | 'Low';
}