import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }

      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="space-y-6">
      <section className="market-card p-4 sm:p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              Basket
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">My cart ({cartData.length})</h1>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="space-y-3">
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              if (!productData) return null;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[var(--line-soft)] bg-white p-4"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <img
                      className="h-24 w-24 rounded-xl border border-[var(--line-soft)] object-cover"
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-[var(--ink)]">{productData.name}</p>
                          <p className="mt-1 text-sm text-[var(--ink-muted)]">
                            Size: {item.size}, Material: Premium, Seller: Artel Market
                          </p>
                        </div>
                        <p className="text-xl font-bold">
                          {currency}
                          {productData.price}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="flex items-center overflow-hidden rounded-xl border border-[var(--line-soft)]">
                          <button
                            onClick={() => updateQuantity(item._id, item.size, Math.max(0, item.quantity - 1))}
                            className="px-4 py-2 text-lg"
                            type="button"
                          >
                            -
                          </button>
                          <span className="border-x border-[var(--line-soft)] px-4 py-2 text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                            className="px-4 py-2 text-lg"
                            type="button"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className="text-sm font-semibold text-[#ef4444]"
                          type="button"
                        >
                          Remove
                        </button>
                        <button className="text-sm font-semibold text-[var(--brand)]" type="button">
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-wrap justify-between gap-3 pt-2">
              <button
                onClick={() => navigate("/collection")}
                className="rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white"
                type="button"
              >
                Back to shop
              </button>
              <button className="rounded-lg border border-[var(--line-soft)] px-5 py-3 text-sm font-semibold text-[var(--ink-muted)]" type="button">
                Remove all
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <CartTotal />
            <button
              onClick={() => navigate("/place-order")}
              className="w-full rounded-xl bg-[#19b21f] px-6 py-3 text-sm font-semibold text-white"
              type="button"
            >
              Checkout
            </button>
            <div className="market-soft-card p-4 text-center text-xs text-[var(--ink-muted)]">
              Visa · Mastercard · PayPal · Apple Pay
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Secure payment", icon: "🔒" },
          { title: "Customer support", icon: "💬" },
          { title: "Free delivery", icon: "🚚" },
        ].map((item) => (
          <div key={item.title} className="market-card flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-muted)] text-xl">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-[var(--ink-muted)]">Have you ever finally just</p>
            </div>
          </div>
        ))}
      </section>

      <section className="market-card p-4 sm:p-5">
        <div className="section-heading">
          <div>
            <h2>Saved for later</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {products.slice(0, 4).map((item) => (
            <div key={item._id} className="rounded-2xl border border-[var(--line-soft)] bg-white p-3">
              <div className="aspect-square overflow-hidden rounded-xl border border-[var(--line-soft)]">
                <img className="h-full w-full object-cover" src={item.image[0]} alt={item.name} />
              </div>
              <p className="mt-3 text-lg font-bold">
                {currency}
                {item.price}
              </p>
              <p className="text-sm text-[var(--ink-muted)]">{item.name}</p>
              <button className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]" type="button">
                <img src={assets.cart_icon} className="h-4 w-4" alt="cart" />
                Move to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#1b76ff,#2f91ff,#1e60d9)] p-5 text-white">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-bold">Super discount on more than 100 USD</p>
            <p className="text-sm text-white/80">Have you ever finally just write dummy info</p>
          </div>
          <button className="rounded-lg bg-[#ff9d3b] px-4 py-2 text-sm font-semibold text-white" type="button">
            Shop now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
