import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const tax = subtotal ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal ? subtotal + deliveryFee + tax : 0;

  return (
    <div className="market-card p-5">
      <p className="text-lg font-bold">Have a coupon?</p>
      <div className="mt-3 flex gap-2">
        <input
          className="min-w-0 flex-1 rounded-xl border border-[var(--line-soft)] px-4 py-3 text-sm outline-none"
          placeholder="Add coupon"
          readOnly
          value=""
        />
        <button className="rounded-xl border border-[var(--line-soft)] px-4 py-3 text-sm font-semibold text-[var(--brand)]" type="button">
          Apply
        </button>
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-[var(--ink-muted)]">Subtotal:</span>
          <span className="font-semibold">
            {currency}
            {subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[var(--ink-muted)]">Shipping:</span>
          <span className="font-semibold">
            {currency}
            {deliveryFee.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[var(--ink-muted)]">Tax:</span>
          <span className="font-semibold text-[var(--success)]">
            {currency}
            {tax.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-5 border-t border-[var(--line-soft)] pt-4">
        <div className="flex items-center justify-between text-lg font-bold">
          <span>Total:</span>
          <span>
            {currency}
            {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
