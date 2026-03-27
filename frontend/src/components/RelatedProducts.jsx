import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products
        .filter((item) => item.category === category && item.subCategory === subCategory)
        .slice(0, 6);
      setRelated(filtered);
    }
  }, [products, category, subCategory]);

  if (!related.length) {
    return null;
  }

  return (
    <section className="market-card mt-8 p-4 sm:p-5">
      <div className="section-heading">
        <div>
          <h2>Related products</h2>
          <p className="mt-1 text-sm text-[var(--ink-muted)]">
            Similar items presented in the same marketplace card system.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            compact
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
