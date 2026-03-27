import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";
import { ShopContext } from "../contexts/ShopContext";

const promoBlocks = [
  { title: "Summer Essentials", tint: "bg-[var(--warm)]" },
  { title: "Minimalist Jewelry", tint: "bg-[#e8f3ff]" },
  { title: "Artisan Footwear", tint: "bg-[#eefce9]" },
];

const Home = () => {
  const { products } = useContext(ShopContext);
  const showcase = products.slice(0, 6);

  return (
    <div className="space-y-8 pb-12">
      <Hero />

      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <LatestCollection />

        <div className="flex flex-col gap-6">
          {promoBlocks.map((block, index) => (
            <div
              key={block.title}
              className={`market-card relative flex min-h-[160px] items-center justify-between overflow-hidden border-none p-6 ${block.tint}`}
            >
              <div className="relative z-10 max-w-[200px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ink-muted)]">
                  Discover
                </p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-[var(--ink)]">
                  {block.title}
                </h3>
                <Link
                  to="/collection"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)]"
                >
                  Explore now
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="absolute bottom-[-20%] right-[-10%] h-40 w-40 rounded-full bg-white/40 blur-3xl sm:block" />
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Highlight Section */}
      <section className="market-card group relative min-h-[400px] overflow-hidden border-none">
        <div className="absolute inset-0 bg-slate-900 transition-transform duration-700 group-hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
        </div>
        <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-center p-8 md:p-16">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--brand)]">
            Heritage Collection
          </p>
          <h2 className="mt-4 max-w-lg text-4xl font-black leading-[1.1] text-white sm:text-6xl">
            Timeless fabrics, <br />
            modern silhouettes.
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/70">
            Our latest drop celebrates the art of minimalism with sustainably sourced materials and expert craftsmanship.
          </p>
          <div className="mt-10">
            <Link to="/collection" className="market-button h-14 px-10 text-lg">
              View Collection
            </Link>
          </div>
        </div>
      </section>

      <BestSeller />

      <section className="py-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Free Worldwide Shipping",
              desc: "On all orders over $150",
              icon: "M3 13h2l3 3H8m13 0h-2l-3-3m-3 3v8m0 0l-3-3m3 3l3-3",
            },
            {
              title: "30-Day Easy Returns",
              desc: "Hassle-free exchanges",
              icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m0 0H15",
            },
            {
              title: "Secure Payment",
              desc: "100% protected checkout",
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.355r-1.158-1.1s",
            },
            {
              title: "24/7 Premium Support",
              desc: "Dedicated style experts",
              icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
            },
          ].map((service, index) => (
            <div key={service.title} className="market-card p-6 transition-all hover:-translate-y-1">
              <div className="mb-4 text-[var(--brand)]">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon} />
                </svg>
              </div>
              <p className="text-base font-extrabold tracking-tight">{service.title}</p>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="market-card p-6 sm:p-10">
        <div className="section-heading">
          <div>
            <h2>Selected for you</h2>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">
              Hand-picked styles based on current trends.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
          {showcase.map((item) => (
            <Link
              key={item._id}
              to={`/product/${item._id}`}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)]">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.image[0]} alt={item.name} />
              </div>
              <p className="mt-4 text-sm font-black text-[var(--ink)]">${item.price}</p>
              <p className="mt-0.5 truncate text-xs text-[var(--ink-muted)]">{item.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <OurPolicy />
      <NewsLetter />
    </div>
  );
};

export default Home;
