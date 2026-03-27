import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products]);

  return (
    <section className="market-card h-full p-6 sm:p-10">
      <div className="section-heading">
        <div className="max-w-md">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--brand)]">
            Just In
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[var(--ink)] sm:text-4xl">
            The New Arrivals
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
            Explore our latest curation of seasonal essentials, designed for the modern lifestyle.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {latestProducts.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
