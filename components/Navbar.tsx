'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Star from './Star';

export default function Navbar() {
  const pathname = usePathname();
  const isCreatorView = pathname?.includes('creator-dashboard');

  return (
    <nav className="bg-[#F2EDE4] border-b-2 border-[#2B2B2B]/10 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Star size={20} />
        <span className="headline-solid text-lg">CREATOR OS</span>
      </Link>
      <div className="flex items-center gap-1 bg-white rounded-full p-1 border border-[#2B2B2B]/10 shadow-sm">
        <Link
          href="/discover"
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${
            !isCreatorView ? 'bg-[#C73E9C] text-white' : 'text-[#2B2B2B]/60 hover:text-[#2B2B2B]'
          }`}
        >
          Brand View
        </Link>
        <Link
          href="/creator-dashboard"
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${
            isCreatorView ? 'bg-[#C73E9C] text-white' : 'text-[#2B2B2B]/60 hover:text-[#2B2B2B]'
          }`}
        >
          Creator View
        </Link>
      </div>
    </nav>
  );
}