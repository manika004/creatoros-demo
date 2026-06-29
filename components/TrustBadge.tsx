export default function TrustBadge({ score }: { score: number }) {
  const tier = score >= 85 ? 'high' : score >= 70 ? 'mid' : 'low';
  const label = tier === 'high' ? 'Verified Trust' : tier === 'mid' ? 'Moderate Trust' : 'Low Trust';

  return (
    <span className={`trust-badge-${tier} text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1`}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
      {score}/100 · {label}
    </span>
  );
}