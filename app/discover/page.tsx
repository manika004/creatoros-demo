'use client';
import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import CreatorCard from '@/components/CreatorCard';
import creatorsData from '@/data/creators.json';
import { Search } from 'lucide-react';

const NICHES = ['All', 'Fitness', 'Tech', 'Food', 'Travel', 'Fashion'];

export default function DiscoverPage() {
  const [search, setSearch] = useState('');
  const [niche, setNiche] = useState('All');
  const [budget, setBudget] = useState(100000);

  const filtered = useMemo(() => {
    return creatorsData.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
                             c.niche.toLowerCase().includes(search.toLowerCase());
      const matchesNiche = niche === 'All' || c.niche === niche;
      const matchesBudget = c.minBudget <= budget;
      return matchesSearch && matchesNiche && matchesBudget;
    }).sort((a, b) => b.trustRank - a.trustRank);
  }, [search, niche, budget]);

  return (
  <div className="min-h-screen">
    <Navbar />

    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="headline-solid text-3xl mb-1">Discover Creators</h1>
      <p className="handwritten text-xl text-[#2B2B2B]/60 mb-6">AI-ranked by trust score, engagement & niche fit</p>

      {/* Filters */}
      <div className="paper-card p-4 mb-6 flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2B2B2B]/40" size={18} />
          <input
            type="text"
            placeholder="Search by name or niche..."
            className="w-full pl-10 pr-4 py-2.5 border border-[#2B2B2B]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C73E9C]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="px-4 py-2.5 border border-[#2B2B2B]/15 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C73E9C]"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
        >
          {NICHES.map((n) => <option key={n} value={n}>{n}</option>)}
        </select>

        <div className="flex items-center gap-2 min-w-[220px]">
          <span className="text-xs text-[#2B2B2B]/50 whitespace-nowrap">Max Budget</span>
          <input
            type="range"
            min="10000"
            max="100000"
            step="5000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="flex-1 accent-[#C73E9C]"
          />
          <span className="text-xs font-semibold text-[#2B2B2B]/80 whitespace-nowrap">₹{budget.toLocaleString()}</span>
        </div>
      </div>

      <p className="text-sm text-[#2B2B2B]/50 mb-4">{filtered.length} creators found</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c, i) => <CreatorCard key={c.id} creator={c} index={i} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#2B2B2B]/40">
          No creators match your filters. Try adjusting budget or niche.
        </div>
      )}
    </div>
  </div>
);
}