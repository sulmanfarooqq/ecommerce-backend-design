import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";

const ProductItem = ({
  id,
  image,
  name,
  price,
  description = "",
  compact = false,
  list = false,
}) => {
  const { currency } = useContext(ShopContext);

  if (list) {
    return (
      <Link
        className="market-card flex gap-4 p-3 transition hover:-translate-y-0.5 hover:border-[var(--brand)]"
        to={`/product/${id}`}
      >
        <img
          className="h-28 w-28 rounded-xl border border-[var(--line-soft)] object-cover bg-white"
          src={image[0]}
          alt={name}
        />
        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold text-[var(--ink)]">{name}</p>
          <p className="mt-2 text-xl font-bold text-[var(--ink)]">
            {currency}
            {price}
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs text-[var(--ink-muted)]">
            <span className="text-amber-500">★★★★★</span>
            <span>7.5</span>
            <span>154 orders</span>
            <span className="font-semibold text-[var(--success)]">Free Shipping</span>
          </div>
          <p className="mt-3 text-sm text-[var(--ink-muted)]">
            {description || "Clean marketplace card layout adapted to live store data."}
          </p>
          <p className="mt-3 text-sm font-semibold text-[var(--brand)]">View details</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      className="group market-card block overflow-hidden p-3 transition hover:-translate-y-1 hover:border-[var(--brand)]"
      to={`/product/${id}`}
    >
      <div className={`overflow-hidden rounded-xl border border-[var(--line-soft)] bg-white ${compact ? "aspect-square" : "aspect-[0.92]"}`}>
        <img
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          src={image[0]}
          alt={name}
        />
      </div>
      <div className="pt-3">
        <p className="min-h-[40px] text-sm font-semibold text-[var(--ink)]">
          {name}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <p className="text-lg font-bold text-[var(--ink)]">
            {currency}
            {price}
          </p>
          <span className="text-xs text-slate-400 line-through">
            {currency}
            {(Number(price) * 1.25).toFixed(2)}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-[var(--ink-muted)]">
          <span>Free Shipping</span>
          <span className="rounded-full bg-[var(--surface-muted)] px-2 py-1">In stock</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
