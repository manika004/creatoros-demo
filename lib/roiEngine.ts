import { Creator, ROIPrediction } from './types';

export function predictROI(creator: Creator, budget: number, campaignNiche: string): ROIPrediction {
  const engagementFactor = creator.engagementRate / 5;
  const trustFactor = creator.trustRank / 100;
  const nicheMatch = creator.niche.toLowerCase() === campaignNiche.toLowerCase() ? 1.3 : 0.85;
  const budgetFit = Math.min(budget / creator.minBudget, 1.5);

  const matchScore = Math.round(
    (trustFactor * 40) + (nicheMatch * 35) + (Math.min(budgetFit, 1) * 25)
  );

  const predictedReach = Math.round(
    creator.avgViews * engagementFactor * nicheMatch * 1.4
  );

  const estimatedClicks = Math.round(predictedReach * 0.024);
  const estimatedRevenue = estimatedClicks * 145; // avg conversion value assumption
  const predictedROI = Math.round(((estimatedRevenue - budget) / budget) * 100);

  const confidence = trustFactor > 0.85 && nicheMatch > 1 ? 'High' 
    : trustFactor > 0.65 ? 'Medium' : 'Low';

  return {
    predictedReach,
    predictedROI,
    matchScore: Math.min(matchScore, 99),
    estimatedClicks,
    confidence,
  };
}