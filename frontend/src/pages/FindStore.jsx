import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const FindStore = () => {
  const stores = [
    {
      city: "New York",
      address: "123 Fifth Avenue, Manhattan, NY 10003",
      phone: "+1 (212) 555-0198",
      email: "manhattan@forever.com",
    },
    {
      city: "London",
      address: "45 Oxford St, London W1D 2DZ, UK",
      phone: "+44 20 7946 0123",
      email: "london@forever.com",
    },
    {
      city: "Tokyo",
      address: "1-1-1 Shibakoen, Minato City, Tokyo 105-0011",
      phone: "+81 3-5400-1111",
      email: "tokyo@forever.com",
    },
  ];

  return (
    <div className="pb-20">
      <div className="text-center text-3xl pt-10 border-t">
        <Title text1={"OUR"} text2={"STORES"} />
        <p className="mt-4 text-sm text-[var(--ink-muted)] max-w-md mx-auto">
          Visit one of our global flagship locations to experience the Forever collection in person.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stores.map((store) => (
          <div key={store.city} className="market-card p-8 group transition-all hover:border-[var(--brand)]">
            <h3 className="text-2xl font-black tracking-tight text-[var(--ink)]">{store.city}</h3>
            <div className="mt-6 space-y-4 text-sm text-[var(--ink-muted)]">
              <div className="flex gap-3">
                <svg className="h-5 w-5 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>{store.address}</p>
              </div>
              <div className="flex gap-3">
                <svg className="h-5 w-5 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>{store.phone}</p>
              </div>
              <div className="flex gap-3">
                <svg className="h-5 w-5 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>{store.email}</p>
              </div>
            </div>
            <button className="mt-8 w-full rounded-xl border border-[var(--line-soft)] py-3 text-sm font-bold text-[var(--ink)] transition-colors group-hover:bg-[var(--ink)] group-hover:text-white">
              Get Directions
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t pt-10">
        <div className="market-card overflow-hidden border-none bg-slate-900 text-white md:grid md:grid-cols-2">
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-black">Can't reach a store?</h2>
            <p className="mt-4 text-white/70">
              Our 24/7 online support team is ready to help you with sizing, product details, or delivery tracking.
            </p>
            <div className="mt-8">
              <button className="market-button px-8">Contact Online Support</button>
            </div>
          </div>
          <div className="h-64 md:h-full bg-slate-800">
             {/* Map Placeholder or Lifestyle Image */}
             <img src={assets.contact_img} className="h-full w-full object-cover opacity-60" alt="Support" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindStore;
