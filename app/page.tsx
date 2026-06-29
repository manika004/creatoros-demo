import Link from 'next/link';
import Star from '@/components/Star';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <Star className="absolute top-16 left-[12%] opacity-70" size={28} />
      <Star className="absolute top-24 right-[15%] opacity-50" size={20} />
      <Star className="absolute bottom-20 left-[20%] opacity-60" size={22} />
      <Star className="absolute top-1/2 left-[6%] opacity-50" size={18} />
      <Star className="absolute top-1/3 right-[8%] opacity-45" size={14} />
      <Star className="absolute bottom-12 left-[40%] opacity-55" size={20} />
      <Star className="absolute top-[8%] left-[45%] opacity-35" size={12} />
      <Star className="absolute bottom-[8%] right-[30%] opacity-50" size={18} />
      <Star className="absolute top-[60%] left-[15%] opacity-40" size={16} />
      <Star className="absolute top-[20%] left-[25%] opacity-30" size={14} />
      <Star className="absolute top-10 right-[35%] opacity-40" size={16} />
      <Star className="absolute bottom-32 right-[10%] opacity-60" size={24} />


      <div className="paper-card text-center max-w-xl px-12 py-14 rotate-[-0.5deg]">
        <h1 className="headline-outline text-5xl md:text-6xl mb-4 leading-tight">
          CREATOR OS
        </h1>
        <p className="handwritten text-2xl text-[#2B2B2B]/70 mb-8">
          AI Powered Creator Discovery and ROI Prediction
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/discover" className="bg-[#C73E9C] hover:bg-[#A12D7E] text-white px-6 py-3 rounded-xl font-semibold transition shadow-md">
            Enter as Brand
          </Link>
          <Link href="/creator-dashboard" className="bg-[#2B2B2B]/5 hover:bg-[#2B2B2B]/10 text-[#2B2B2B] px-6 py-3 rounded-xl font-semibold transition">
            Enter as Creator
          </Link>
        </div>
        <p className="tape-label inline-block text-sm px-4 py-1 mt-8">By BitByBit</p>
      </div>
    </div>
  );
}