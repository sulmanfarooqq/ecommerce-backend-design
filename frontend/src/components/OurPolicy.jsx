import React from "react";

const policies = [
  {
    title: "Secure payment",
    description: "Have you ever finally just",
    icon: "🔒",
  },
  {
    title: "Customer support",
    description: "Always-on service for buyers",
    icon: "💬",
  },
  {
    title: "Free delivery",
    description: "Marketplace-style shipping promise",
    icon: "🚚",
  },
];

const OurPolicy = () => {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {policies.map((item) => (
        <div key={item.title} className="market-card flex items-center gap-4 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-muted)] text-xl">
            {item.icon}
          </div>
          <div>
            <p className="font-semibold text-[var(--ink)]">{item.title}</p>
            <p className="text-sm text-[var(--ink-muted)]">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurPolicy;
