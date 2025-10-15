/*
TokenWebsite.jsx
Single-page React website template for launching a crypto token.
Uses Tailwind CSS and basic React only.

To run:
1. Create a React app (Vite or Create React App)
2. Setup Tailwind CSS.
3. Save this file as src/components/TokenWebsite.jsx
4. Import it in App.jsx and render <TokenWebsite />.
*/

import React from "react";

export default function TokenWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white font-sans">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-800 sticky top-0 bg-slate-900/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-xl font-bold">TK</div>
          <span className="text-xl font-semibold tracking-wide">TokenVerse</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#tokenomics" className="hover:text-white">Tokenomics</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
          <a href="#buy" className="hover:text-white">Buy</a>
          <a href="#community" className="hover:text-white">Community</a>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-2 rounded-lg font-medium hover:scale-105 transition">Connect Wallet</button>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Welcome to TokenVerse
        </h1>
        <p className="max-w-2xl text-slate-400 mb-8">
          The next-generation decentralized token powering a future of finance, gaming, and digital ownership.
        </p>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:opacity-90">Buy $TVR</button>
          <button className="border border-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-800">Whitepaper</button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-8 py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About TokenVerse</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            TokenVerse ($TVR) is a utility token built on Ethereum, designed for multi-chain interoperability. It fuels decentralized apps, NFT ecosystems, and future DAO governance across Web3.
          </p>
        </div>
      </section>

      {/* TOKENOMICS SECTION */}
      <section id="tokenomics" className="px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Total Supply</h3>
              <p className="text-slate-400">1,000,000,000 $TVR</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Burn Mechanism</h3>
              <p className="text-slate-400">2% of every transaction is burned to increase scarcity.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Rewards</h3>
              <p className="text-slate-400">3% of every trade is redistributed to holders automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section id="roadmap" className="px-8 py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {[
              { phase: "Q1 2025", goals: ["Smart contract launch", "Website + Whitepaper", "Presale"] },
              { phase: "Q2 2025", goals: ["DEX listing", "Community airdrops", "Marketing campaign"] },
              { phase: "Q3 2025", goals: ["CEX listings", "NFT integration", "Staking platform"] },
              { phase: "Q4 2025", goals: ["DAO governance", "GameFi partnerships", "TokenVerse 2.0"] },
            ].map((item) => (
              <div key={item.phase} className="bg-slate-800 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-3 text-indigo-400">{item.phase}</h3>
                <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                  {item.goals.map((g) => <li key={g}>{g}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUY SECTION */}
      <section id="buy" className="px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">How to Buy $TVR</h2>
          <p className="text-slate-400 mb-8">Follow these simple steps to join the TokenVerse revolution:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">1. Connect Wallet</h3>
              <p className="text-slate-400 text-sm">Use MetaMask or TrustWallet to connect to the Ethereum network.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">2. Swap ETH for $TVR</h3>
              <p className="text-slate-400 text-sm">Visit Uniswap or a supported DEX to swap your ETH for $TVR tokens.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">3. HODL & Earn</h3>
              <p className="text-slate-400 text-sm">Keep your tokens in your wallet to earn automatic rewards with every trade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section id="community" className="px-8 py-20 bg-slate-950 text-center">
        <h2 className="text-3xl font-semibold mb-6">Join the Community</h2>
        <p className="text-slate-400 mb-8">Stay updated on announcements, partnerships, and giveaways!</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Twitter", color: "from-sky-400 to-blue-500" },
            { name: "Telegram", color: "from-blue-500 to-cyan-400" },
            { name: "Discord", color: "from-indigo-500 to-purple-600" },
            { name: "Medium", color: "from-gray-600 to-gray-800" },
          ].map((s) => (
            <button
              key={s.name}
              className={`px-6 py-2 rounded-lg font-medium bg-gradient-to-r ${s.color} hover:opacity-90`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} TokenVerse — Built for the decentralized future.
      </footer>
    </div>
  );
}

