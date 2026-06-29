'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import TrustBadge from '@/components/TrustBadge';
import creatorsData from '@/data/creators.json';
import { predictROI } from '@/lib/roiEngine';
import { ROIPrediction } from '@/lib/types';
import { Sparkles, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

export default function CampaignPage() {
  const params = useParams();
  const router = useRouter();
  const creator = creatorsData.find((c) => c.id === Number(params.id));

  const [budget, setBudget] = useState(creator?.minBudget || 25000);
  const [campaignNiche, setCampaignNiche] = useState(creator?.niche || 'Fitness');
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<ROIPrediction | null>(null);
  const [dealSent, setDealSent] = useState(false);

  if (!creator) return <div className="p-10">Creator not found</div>;

  const runPrediction = () => {
    setLoading(true);
    setPrediction(null);
    setTimeout(() => {
      setPrediction(predictROI(creator, budget, campaignNiche));
      setLoading(false);
    }, 1400); // simulated AI compute time
  };

  return (
  <div className="min-h-screen">
    <Navbar />
    <div className="max-w-4xl mx-auto px-6 py-8">
      <button onClick={() => router.back()} className="flex items-center gap-1 text-sm text-[#2B2B2B]/50 hover:text-[#2B2B2B] mb-6">
        <ArrowLeft size={16} /> Back to discovery
      </button>

      {/* Creator header */}
      <div className="paper-card p-6 mb-6 flex items-center gap-4">
        <img src={creator.avatar} className="w-20 h-20 rounded-full object-cover border-2 border-[#2B2B2B]/10" />
        <div className="flex-1">
          <h1 className="text-xl font-bold text-[#2B2B2B]">{creator.name}</h1>
          <p className="text-[#2B2B2B]/50 mb-2">{creator.handle} · {creator.location} · {creator.niche}</p>
          <TrustBadge score={creator.trustRank} />
        </div>
        <div className="text-right">
          <p className="text-xs text-[#2B2B2B]/40 uppercase">Past Brands</p>
          <p className="text-sm font-medium text-[#2B2B2B]/70">{creator.pastBrands.join(', ') || 'New to brand deals'}</p>
        </div>
      </div>

      {/* Campaign inputs */}
      <div className="paper-card p-6 mb-6">
        <h2 className="font-semibold text-[#2B2B2B] mb-4">Campaign Details</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs text-[#2B2B2B]/50 mb-1 block">Campaign Budget (₹)</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full px-3 py-2 border border-[#2B2B2B]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C73E9C]"
            />
          </div>
          <div>
            <label className="text-xs text-[#2B2B2B]/50 mb-1 block">Campaign Category</label>
            <select
              value={campaignNiche}
              onChange={(e) => setCampaignNiche(e.target.value)}
              className="w-full px-3 py-2 border border-[#2B2B2B]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C73E9C]"
            >
              {['Fitness', 'Tech', 'Food', 'Travel', 'Fashion'].map((n) => <option key={n}>{n}</option>)}
            </select>
          </div>
        </div>

        <button
          onClick={runPrediction}
          disabled={loading}
          className="bg-[#C73E9C] hover:bg-[#A12D7E] disabled:opacity-60 text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition shadow-md"
        >
          <Sparkles size={16} />
          {loading ? 'Running AI Prediction...' : 'Predict Campaign ROI'}
        </button>
      </div>

      {loading && (
        <div className="paper-card p-8 text-center text-[#2B2B2B]/40 animate-pulse">
          Analyzing engagement patterns, audience overlap & historical performance...
        </div>
      )}

      {prediction && !loading && (
        <div className="bg-[#2B2B2B] rounded-2xl p-6 text-white mb-6 shadow-xl">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold flex items-center gap-2"><Sparkles size={18} className="text-[#14B8A6]" /> AI Prediction Results</h2>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
              prediction.confidence === 'High' ? 'bg-teal-500/20 text-teal-300' :
              prediction.confidence === 'Medium' ? 'bg-amber-500/20 text-amber-300' : 'bg-rose-500/20 text-rose-300'
            }`}>
              {prediction.confidence} Confidence
            </span>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-2xl font-bold text-[#14B8A6]">{prediction.matchScore}%</p>
              <p className="text-xs text-gray-400">Match Score</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{(prediction.predictedReach / 1000).toFixed(0)}K</p>
              <p className="text-xs text-gray-400">Predicted Reach</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{prediction.estimatedClicks.toLocaleString()}</p>
              <p className="text-xs text-gray-400">Est. Clicks</p>
            </div>
            <div>
              <p className={`text-2xl font-bold ${prediction.predictedROI >= 0 ? 'text-[#14B8A6]' : 'text-rose-400'}`}>
                {prediction.predictedROI >= 0 ? '+' : ''}{prediction.predictedROI}%
              </p>
              <p className="text-xs text-gray-400">Predicted ROI</p>
            </div>
          </div>

          {!dealSent ? (
            <button
              onClick={() => setDealSent(true)}
              className="w-full bg-[#C73E9C] hover:bg-[#A12D7E] text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition"
            >
              <Send size={16} /> Send Deal to {creator.name}
            </button>
          ) : (
            <div className="w-full bg-teal-500/20 border border-teal-500/40 text-teal-300 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
              <CheckCircle2 size={16} /> Deal sent! {creator.name} has been notified.
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);
}