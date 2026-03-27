import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-[260px_1fr_280px]">
      <aside className="market-card hidden p-5 lg:block">
        <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)]">
          Collections
        </p>
        <div className="space-y-4 text-sm font-medium text-[var(--ink)]">
          {[
            { label: "New Arrivals", path: "/collection" },
            { label: "Women's Wear", path: "/collection?category=Women" },
            { label: "Men's Collection", path: "/collection?category=Men" },
            { label: "Kids & Baby", path: "/collection?category=Kids" },
            { label: "Bags & Footwear", path: "/collection?subCategory=Footwear" },
            { label: "Jewelry & Watches", path: "/collection?subCategory=Accessories" },
            { label: "Beauty & Fragrance", path: "/collection?subCategory=Beauty" },
            { label: "Home & Lifestyle", path: "/collection?subCategory=Lifestyle" },
            { label: "Gift Cards", path: "/collection" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block w-full text-left transition-colors hover:text-[var(--brand)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>

      <div className="market-card relative overflow-hidden border-none bg-[var(--hero-mint)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.4),_transparent_70%)]" />
        <div className="relative z-10 grid min-h-[400px] items-center gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--ink)] backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              Summer 2026 Collection
            </div>
            <h1 className="text-4xl font-[900] leading-[1.1] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              Elevate your <br />
              <span className="text-[var(--brand)]">everyday style.</span>
            </h1>
            <p className="mt-6 max-w-[440px] text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              Experience the perfect blend of modern sophistication and timeless comfort with our new seasonal curation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/collection" className="market-button h-12 px-8 text-base">
                Shop Now
              </Link>
              <Link
                to="/collection"
                className="flex h-12 items-center rounded-xl bg-white px-8 text-base font-semibold text-[var(--ink)] shadow-sm transition-all hover:bg-slate-50"
              >
                View Lookbook
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                className="h-full w-full object-cover"
                src={assets.hero_img}
                alt="Latest fashion arrival"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="market-card group flex-1 p-6 transition-colors hover:border-[var(--brand)]">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] transition-colors group-hover:bg-[var(--brand)] group-hover:text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 118 0m-8 4v2m0 10a10 10 0 110-20 10 10 0 010 20z" />
            </svg>
          </div>
          <p className="text-lg font-extrabold tracking-tight">Forever Member</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
            Join our inner circle for early access to drops and exclusive rewards.
          </p>
          <Link to="/login" className="market-button mt-5 w-full">
            Join the Club
          </Link>
        </div>

        <div className="group relative flex-1 cursor-pointer overflow-hidden rounded-2xl bg-slate-900 p-6 text-white transition-all">
          <div className="absolute right-[-10%] top-[-10%] h-32 w-32 rounded-full bg-[var(--brand)]/20 blur-2xl transition-all group-hover:bg-[var(--brand)]/40" />
          <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-white/60">
            Exclusive
          </p>
          <p className="relative z-10 mt-3 text-2xl font-black leading-tight">
            Curated <br />Essentials
          </p>
          <p className="relative z-10 mt-3 text-sm text-white/70">
            Selected styles now <br />up to 40% off.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
