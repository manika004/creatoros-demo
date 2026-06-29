import { Creator } from '@/lib/types';
import TrustBadge from './TrustBadge';
import Link from 'next/link';

const rotations = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]', 'rotate-[0.5deg]'];

export default function CreatorCard({ creator, index = 0 }: { creator: Creator; index?: number }) {
  const rotate = rotations[index % rotations.length];

  return (
    <Link href={`/campaign/${creator.id}`}>
      <div className={`paper-card p-5 hover:shadow-xl hover:-translate-y-1 hover:rotate-0 transition-all cursor-pointer ${rotate}`}>
        <div className="flex items-start gap-3 mb-3">
          <img src={creator.avatar} alt={creator.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#2B2B2B]/10" />
          <div className="flex-1">
            <h3 className="font-semibold text-[#2B2B2B]">{creator.name}</h3>
            <p className="text-sm text-[#2B2B2B]/50">{creator.handle} · {creator.location}</p>
          </div>
        </div>

        <TrustBadge score={creator.trustRank} />

        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          <div>
            <p className="text-sm font-bold text-[#2B2B2B]">{(creator.followers / 1000).toFixed(0)}K</p>
            <p className="text-[10px] text-[#2B2B2B]/50 uppercase">Followers</p>
          </div>
          <div>
            <p className="text-sm font-bold text-[#2B2B2B]">{creator.engagementRate}%</p>
            <p className="text-[10px] text-[#2B2B2B]/50 uppercase">Engagement</p>
          </div>
          <div>
            <p className="text-sm font-bold text-[#2B2B2B]">{(creator.avgViews / 1000).toFixed(0)}K</p>
            <p className="text-[10px] text-[#2B2B2B]/50 uppercase">Avg Views</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#2B2B2B]/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#C73E9C] bg-[#C73E9C]/10 px-2 py-1 rounded-full">{creator.niche}</span>
          <span className="text-xs font-semibold text-[#2B2B2B]/70">{creator.priceRange}</span>
        </div>
      </div>
    </Link>
  );
}