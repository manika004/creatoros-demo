'use client';
import Navbar from '@/components/Navbar';
import earningsData from '@/data/earnings.json';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { TrendingUp, Wallet, Bell, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

export default function CreatorDashboard() {
  const [dealStatus, setDealStatus] = useState<'pending' | 'accepted' | 'declined'>('pending');

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-[#2B2B2B] mb-1">Welcome back, Ananya 👋</h1>
        <p className="text-gray-500 mb-6">Here's your creator performance overview</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: stats + chart */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="paper-card p-5">
                <Wallet className="text-teal-500 mb-2" size={20} />
                <p className="text-2xl font-bold text-[#2B2B2B]">₹{earningsData.totalEarnings.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Total earnings (YTD)</p>
              </div>
              <div className="paper-card p-5">
                <TrendingUp className="text-teal-500 mb-2" size={20} />
                <p className="text-2xl font-bold text-[#2B2B2B]">+34%</p>
                <p className="text-xs text-gray-500">Growth vs last quarter</p>
              </div>
            </div>

            <div className="paper-card p-5">
              <h3 className="font-semibold text-gray-900 mb-4">Earnings by Platform (Monthly)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={earningsData.monthlyData}>
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="brandDeals" stroke="#0D9488" strokeWidth={2} name="Brand Deals" />
                  <Line type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={2} name="Instagram" />
                  <Line type="monotone" dataKey="youtube" stroke="#FF0000" strokeWidth={2} name="YouTube" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="paper-card p-5">
              <h3 className="font-semibold text-gray-900 mb-4">Revenue Split</h3>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={earningsData.platformSplit} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {earningsData.platformSplit.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right: incoming deal notification */}
          <div className="space-y-4">
            <div className="paper-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="text-teal-500" size={18} />
                <h3 className="font-semibold text-[#2B2B2B]">Incoming Deal</h3>
              </div>

              {dealStatus === 'pending' && (
                <div className="border border-teal-200 bg-teal-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-[#2B2B2B] mb-1">FitGear India</p>
                  <p className="text-xs text-gray-600 mb-3">Wants to collaborate on a fitness campaign</p>
                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span>Budget</span><span className="font-semibold text-gray-800">₹25,000</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mb-4">
                    <span>AI Match Score</span><span className="font-semibold text-teal-700">88%</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setDealStatus('accepted')}
                      className="flex-1 bg-teal-500 hover:bg-teal-400 text-white text-xs font-semibold py-2 rounded-lg transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => setDealStatus('declined')}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold py-2 rounded-lg transition"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              )}

              {dealStatus === 'accepted' && (
                <div className="border border-teal-200 bg-teal-50 rounded-xl p-4 flex items-center gap-2 text-teal-700">
                  <CheckCircle2 size={18} /><span className="text-sm font-medium">Deal accepted! Contract sent.</span>
                </div>
              )}

              {dealStatus === 'declined' && (
                <div className="border border-gray-200 bg-gray-50 rounded-xl p-4 flex items-center gap-2 text-gray-500">
                  <XCircle size={18} /><span className="text-sm font-medium">Deal declined.</span>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">AI Content Suggestions</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex gap-2"><span className="text-teal-500">●</span> Post Reels between 6-8 PM for +22% reach</li>
                <li className="flex gap-2"><span className="text-teal-500">●</span> Your "workout transformation" format performs 3x better</li>
                <li className="flex gap-2"><span className="text-teal-500">●</span> Try a Fitness x Food crossover collab</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}