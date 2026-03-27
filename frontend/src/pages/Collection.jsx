import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [viewMode, setViewMode] = useState("grid");

  // Load filters from URL on mount
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const subCategoryParam = searchParams.get("subCategory");

    if (categoryParam) {
      setCategory(categoryParam.split(","));
    } else {
      setCategory([]);
    }

    if (subCategoryParam) {
      setSubCategory(subCategoryParam.split(","));
    } else {
      setSubCategory([]);
    }
  }, [searchParams]);

  const toggleCategory = (event) => {
    const { value } = event.target;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (event) => {
    const { value } = event.target;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    switch (sortType) {
      case "low-high":
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        productsCopy.reverse(); // Assuming original list is semi-newest
        break;
      default:
        break;
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [products, search, showSearch, category, subCategory, sortType]);

  return (
    <div className="space-y-4">
      <section className="market-card p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          <aside className="w-full lg:max-w-[260px]">
            <div className="flex items-center justify-between lg:block">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                  Category
                </p>
                <h1 className="mt-1 text-2xl font-bold tracking-tight">Collection</h1>
              </div>
              <button
                onClick={() => setShowFilter((prev) => !prev)}
                className="rounded-lg border border-[var(--line-soft)] px-3 py-2 text-sm lg:hidden"
                type="button"
              >
                Filters
              </button>
            </div>

            <div className={`mt-4 space-y-4 ${showFilter ? "block" : "hidden lg:block"}`}>
              <div className="market-soft-card p-5">
                <p className="text-sm font-black uppercase tracking-widest text-[var(--ink)]">Categories</p>
                <div className="mt-4 space-y-3 text-sm text-[var(--ink-muted)]">
                  {["Men", "Women", "Kids"].map((item) => (
                    <label key={item} className="flex cursor-pointer items-center gap-3 transition-colors hover:text-[var(--brand)]">
                      <input 
                        onChange={toggleCategory} 
                        type="checkbox" 
                        value={item} 
                        checked={category.includes(item)}
                        className="h-4 w-4 rounded border-[var(--line-soft)] text-[var(--brand)] focus:ring-[var(--brand)]" 
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="market-soft-card p-5">
                <p className="text-sm font-black uppercase tracking-widest text-[var(--ink)]">Type</p>
                <div className="mt-4 space-y-3 text-sm text-[var(--ink-muted)]">
                  {["Topwear", "Bottomwear", "Winterwear", "Footwear", "Accessories", "Beauty"].map((item) => (
                    <label key={item} className="flex cursor-pointer items-center gap-3 transition-colors hover:text-[var(--brand)]">
                      <input 
                        onChange={toggleSubCategory} 
                        type="checkbox" 
                        value={item} 
                        checked={subCategory.includes(item)}
                        className="h-4 w-4 rounded border-[var(--line-soft)] text-[var(--brand)] focus:ring-[var(--brand)]"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-muted)] p-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--ink-muted)]">
                <span>{filterProducts.length} item(s) found</span>
                <span className="market-pill">Verified only</span>
                <span className="market-pill">Featured</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <select
                  onChange={(event) => setSortType(event.target.value)}
                  className="rounded-lg border border-[var(--line-soft)] bg-white px-3 py-2 text-sm outline-none"
                >
                  <option value="relevant">Sort: Relevant</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg border px-3 py-2 text-sm ${viewMode === "list" ? "border-[var(--brand)] bg-[var(--brand)] text-white" : "border-[var(--line-soft)] bg-white"}`}
                  type="button"
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg border px-3 py-2 text-sm ${viewMode === "grid" ? "border-[var(--brand)] bg-[var(--brand)] text-white" : "border-[var(--line-soft)] bg-white"}`}
                  type="button"
                >
                  Grid
                </button>
              </div>
            </div>

            <div className={viewMode === "grid" ? "grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4" : "space-y-3"}>
              {filterProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                  list={viewMode === "list"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
