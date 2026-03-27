import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../contexts/ShopContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    search,
    setSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  const submitSearch = (event) => {
    event.preventDefault();
    setShowSearch(true);
    navigate("/collection");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line-soft)] bg-white/95 backdrop-blur">
      <div className="border-b border-[var(--line-soft)] bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center gap-3 px-3 py-3 sm:px-4 lg:px-6">
          <button
            onClick={() => setVisible(true)}
            className="rounded-lg border border-[var(--line-soft)] p-2 sm:hidden"
            type="button"
          >
            <img src={assets.menu_icon} className="h-4 w-4" alt="menu" />
          </button>

          <Link to="/" className="flex items-center">
            <img src={assets.logo} className="h-8 sm:h-10" alt="Forever Logo" />
          </Link>

          <form
            onSubmit={submitSearch}
            className="hidden flex-1 items-stretch overflow-hidden rounded-xl border-2 border-[var(--brand)] bg-white sm:flex"
          >
            <input
              className="min-w-0 flex-1 px-4 text-sm outline-none"
              type="text"
              placeholder="Search our collection..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className="bg-[var(--brand)] px-5 text-sm font-semibold text-white" type="submit">
              Search
            </button>
          </form>

          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => {
                setShowSearch(true);
                navigate("/collection");
              }}
              className="rounded-lg border border-[var(--line-soft)] p-2 sm:hidden"
              type="button"
            >
              <img src={assets.search_icon} className="h-4 w-4" alt="search" />
            </button>

            <button
              onClick={() => (token ? navigate("/orders") : navigate("/login"))}
              className="hidden items-center gap-2 text-xs text-[var(--ink-muted)] sm:flex"
              type="button"
            >
              <img src={assets.profile_icon} className="h-4 w-4" alt="profile" />
              <span>{token ? "Orders" : "Profile"}</span>
            </button>

            <Link to="/cart" className="relative rounded-lg border border-[var(--line-soft)] p-2">
              <img src={assets.cart_icon} className="h-4 w-4" alt="cart" />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--brand)] px-1 text-[10px] font-bold text-white">
                {getCartCount()}
              </span>
            </Link>

            {token ? (
              <button
                onClick={logout}
                className="hidden rounded-lg border border-[var(--line-soft)] px-3 py-2 text-xs font-semibold text-[var(--ink-muted)] sm:block"
                type="button"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="hidden rounded-lg bg-[var(--brand)] px-3 py-2 text-xs font-semibold text-white sm:block"
                type="button"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="hidden border-b border-[var(--line-soft)] bg-white sm:block">
        <div className="mx-auto max-w-[1280px] px-3 py-2 sm:px-4 lg:px-6">
          <nav className="flex items-center justify-around whitespace-nowrap">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="px-6 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ink)] transition-colors hover:text-[var(--brand)] active:scale-95"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 transition ${visible ? "pointer-events-auto bg-slate-900/30" : "pointer-events-none bg-transparent"}`}
      >
        <div
          className={`h-full w-[84%] max-w-sm bg-white p-5 shadow-2xl transition-transform ${visible ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="flex flex-col">
              <img src={assets.logo} className="h-8 self-start" alt="Forever Logo" />
              <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-[var(--ink-muted)]">
                Marketplace Menu
              </p>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="rounded-lg border border-[var(--line-soft)] px-3 py-2 text-sm"
              type="button"
            >
              Close
            </button>
          </div>

          <form onSubmit={submitSearch} className="mb-6 flex overflow-hidden rounded-xl border border-[var(--line-soft)]">
            <input
              className="min-w-0 flex-1 px-3 py-3 text-sm outline-none"
              type="text"
              placeholder="Search products"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className="bg-[var(--brand)] px-4 text-sm font-semibold text-white" type="submit">
              Go
            </button>
          </form>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                onClick={() => setVisible(false)}
                to={link.path}
                className="rounded-xl border border-[var(--line-soft)] px-4 py-3 text-sm font-medium text-[var(--ink)]"
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setVisible(false);
                token ? logout() : navigate("/login");
              }}
              className="rounded-xl border border-[var(--line-soft)] px-4 py-3 text-left text-sm font-medium text-[var(--ink)]"
              type="button"
            >
              {token ? "Logout" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
