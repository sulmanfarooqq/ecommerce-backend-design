import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";

const SearchBar = () => {
  const { search, showSearch, setSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(location.pathname.includes("collection"));
  }, [location.pathname]);

  if (!showSearch || !visible) {
    return null;
  }

  return (
    <div className="border-b border-[var(--line-soft)] bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-3 py-3 sm:flex-row sm:items-center sm:px-4 lg:px-6">
        <div className="flex flex-1 items-center overflow-hidden rounded-xl border border-[var(--line-soft)] bg-[var(--surface-muted)]">
          <input
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none"
            type="text"
            placeholder="Search in collection"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <span className="px-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--ink-muted)]">
            Live
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {["Summary", "Apple", "Price", "New arrival", "In stock"].map((chip) => (
            <span key={chip} className="market-pill whitespace-nowrap">
              {chip}
            </span>
          ))}
          <button
            onClick={() => setShowSearch(false)}
            className="rounded-lg border border-[var(--line-soft)] px-3 py-2 text-sm text-[var(--ink-muted)]"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
