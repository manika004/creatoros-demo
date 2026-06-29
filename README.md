# CreatorOS 🚀
### All-in-One Creator Intelligence Platform

> AI-powered influencer discovery, campaign ROI prediction, and creator monetization — built for the $500B creator economy.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-teal?style=for-the-badge&logo=vercel)](https://creatoros-demo.vercel.app/)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

---

## 🔗 Live Demo

👉 **[https://creatoros-demo.vercel.app/](https://creatoros-demo.vercel.app/)**

| View | URL | What it shows |
|------|-----|---------------|
| Home | `/` | Entry point — choose Brand or Creator view |
| Brand Discovery | `/discover` | Search & filter creators by niche, budget, TrustRank |
| Campaign ROI | `/campaign/[id]` | AI ROI prediction before spending a rupee |
| Creator Dashboard | `/creator-dashboard` | Unified earnings, incoming deals, content tips |

---

## 🎯 What is CreatorOS?

The creator economy has a fragmentation problem — brands waste budgets on wrong influencers, creators juggle 6+ tools, and nobody has a data-driven way to predict campaign success before launch.

**CreatorOS fixes this** with a single AI-powered workspace:

- 🔍 **AI Influencer Discovery** — search 10M+ creators ranked by engagement quality & brand fit
- 🛡️ **TrustRank** — real-time fake follower detection scored 0–100
- 📈 **ROI Predictor** — ML model forecasts campaign returns *before* you spend
- 💰 **Monetization Dashboard** — unified earnings across YouTube, Instagram & brand deals
- 🤝 **Deal Workspace** — brief → contract → payment, all in one place

---

## 🖥️ Demo Flow (for judges / investors)

Run through this in 3 minutes to see the full product:

1. **Land on Home** → click "Enter as Brand"
2. **Discovery page** → filter by "Fitness" niche + set budget slider
3. **Click any creator card** → see their TrustRank score & profile
4. **Hit "Predict Campaign ROI"** → watch AI compute reach, clicks & ROI %
5. **Click "Send Deal"** → deal dispatched to creator
6. **Switch to Creator View** (top nav toggle) → see the incoming deal notification
7. **Accept the deal** → contract confirmed flow

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | Next.js 14 (App Router) | SSR for SEO, fast routing, API routes |
| Styling | Tailwind CSS | Rapid UI with consistent design tokens |
| Charts | Recharts | Earnings visualizations |
| Icons | Lucide React | Consistent icon system |
| Animation | Framer Motion | Loading states & transitions |
| AI/ML Logic | Custom ROI Engine (TypeScript) | Weighted engagement + trust + niche match scoring |
| Deployment | Vercel | Zero-config, instant deploys |

---

## 🤖 How the AI Works

### TrustRank Score
Scores creators 0–100 based on:
- Follower/following ratio analysis
- Engagement rate vs. platform benchmarks
- Comment authenticity patterns (NLP)
- Audience quality signals

In production: Random Forest classifier trained on labeled fraud data from HypeAuditor-style datasets.

### ROI Predictor
```
Predicted Reach  = avgViews × engagementFactor × nicheMatch × 1.4
Estimated Clicks = predictedReach × 0.024
Predicted ROI    = ((estimatedRevenue - budget) / budget) × 100
```
Factors: TrustRank, niche alignment, engagement rate, budget-to-creator-tier fit.

In production: Ridge regression model retrained monthly on closed campaign outcomes.

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/creatoros-demo.git
cd creatoros-demo

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
creatoros-demo/
├── app/
│   ├── page.tsx                  # Home / entry screen
│   ├── discover/
│   │   └── page.tsx              # Brand discovery + filters
│   ├── campaign/
│   │   └── [id]/
│   │       └── page.tsx          # ROI prediction + deal sending
│   └── creator-dashboard/
│       └── page.tsx              # Creator earnings + incoming deals
├── components/
│   ├── Navbar.tsx                # Brand/Creator view toggle
│   ├── CreatorCard.tsx           # Discovery grid card
│   └── TrustBadge.tsx            # TrustRank colour-coded badge
├── lib/
│   ├── types.ts                  # TypeScript interfaces
│   └── roiEngine.ts              # AI prediction logic
└── data/
    ├── creators.json             # 10 realistic creator profiles
    └── earnings.json             # Multi-platform earnings data
```

---

## 👥 Author

Built at **Hackfluence 2026** by Manika Jain.

---

## 📄 License

MIT — feel free to build on this.
