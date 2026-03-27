import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  const socialIcons = [
    { name: "Facebook", path: "#", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "Instagram", path: "#", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21z" },
    { name: "Twitter", path: "#", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
    { name: "LinkedIn", path: "#", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
  ];

  const sections = [
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Find Store", path: "/find-store" },
        { label: "Careers", path: "/contact" },
        { label: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", path: "/help-center" },
        { label: "Track Order", path: "/orders" },
        { label: "Shipping Policy", path: "/shipping-policy" },
        { label: "Returns & Refunds", path: "/refund-policy" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms of Service", path: "/terms-conditions" },
        { label: "Cookie Policy", path: "/privacy-policy" },
      ],
    },
    {
      title: "Account",
      links: [
        { label: "Login / Register", path: "/login" },
        { label: "My Profile", path: "/orders" },
        { label: "Order History", path: "/orders" },
        { label: "Wishlist", path: "/collection" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[var(--line-soft)] bg-white pt-16 pb-8">
      <div className="mx-auto max-w-[1280px] px-3 sm:px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src={assets.logo} className="h-10 sm:h-12" alt="Forever Logo" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--ink-muted)]">
              Redefining the modern wardrobe with timeless pieces and sustainable craftsmanship. Join our global community of style enthusiasts.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-muted)] transition-all hover:bg-[var(--brand)] hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--ink)]">
                {section.title}
              </h4>
              <ul className="mt-6 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--brand)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[var(--line-soft)] pt-8 text-xs font-bold uppercase tracking-widest text-[var(--ink-muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Forever Collective. All rights reserved.</p>
          <div className="flex gap-8">
             <div className="flex items-center gap-2 cursor-pointer hover:text-[var(--brand)]">
                <span>English</span>
             </div>
             <div className="flex items-center gap-2 cursor-pointer hover:text-[var(--brand)]">
                <span>USD</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
