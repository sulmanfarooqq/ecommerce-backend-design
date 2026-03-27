import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
      setSize(foundProduct.sizes?.[0] || "");
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="h-40 animate-pulse rounded-2xl bg-white/60" />;
  }

  return (
    <div className="space-y-6">
      <section className="market-card p-4 sm:p-5">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr_280px]">
          <div className="grid gap-3 sm:grid-cols-[88px_minmax(0,1fr)]">
            <div className="order-2 flex gap-2 overflow-x-auto sm:order-1 sm:flex-col">
              {productData.image.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setImage(item)}
                  className={`overflow-hidden rounded-xl border bg-white ${image === item ? "border-[var(--brand)]" : "border-[var(--line-soft)]"}`}
                  type="button"
                >
                  <img className="h-20 w-20 object-cover sm:h-[88px] sm:w-full" src={item} alt={productData.name} />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-2xl border border-[var(--line-soft)] bg-white sm:order-2">
              <img className="h-full max-h-[560px] w-full object-cover" src={image} alt={productData.name} />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-[var(--success)]">In stock</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)]">
                {productData.name}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--ink-muted)]">
              <span className="text-amber-500">★★★★☆</span>
              <span>7.5 rating</span>
              <span>154 reviews</span>
              <span>Free Shipping</span>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line-soft)] bg-[var(--line-soft)] sm:grid-cols-3">
              <div className="bg-[#fff0e7] p-4">
                <p className="text-2xl font-bold text-[#f45d1b]">
                  {currency}
                  {productData.price}
                </p>
                <p className="text-xs text-[var(--ink-muted)]">50-100 pcs</p>
              </div>
              <div className="bg-[#fff8ef] p-4">
                <p className="text-2xl font-bold">
                  {currency}
                  {(Number(productData.price) * 0.96).toFixed(2)}
                </p>
                <p className="text-xs text-[var(--ink-muted)]">100-700 pcs</p>
              </div>
              <div className="bg-[#fff8ef] p-4">
                <p className="text-2xl font-bold">
                  {currency}
                  {(Number(productData.price) * 0.91).toFixed(2)}
                </p>
                <p className="text-xs text-[var(--ink-muted)]">700+ pcs</p>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-[var(--ink-muted)] sm:grid-cols-2">
              <div>
                <p className="font-semibold text-[var(--ink)]">Price:</p>
                <p>Negotiable</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--ink)]">Type:</p>
                <p>Classic items</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--ink)]">Material:</p>
                <p>Premium fabric</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--ink)]">Design:</p>
                <p>Modern marketplace layout</p>
              </div>
            </div>

            <p className="border-t border-[var(--line-soft)] pt-4 text-sm leading-6 text-[var(--ink-muted)]">
              {productData.description}
            </p>

            <div>
              <p className="mb-3 text-sm font-semibold text-[var(--ink)]">Select size</p>
              <div className="flex flex-wrap gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium ${item === size ? "border-[var(--brand)] bg-[var(--brand)] text-white" : "border-[var(--line-soft)] bg-white text-[var(--ink)]"}`}
                    type="button"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => addToCart(productData._id, size)}
                className="rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white"
                type="button"
              >
                Add to cart
              </button>
              <button
                className="rounded-lg border border-[var(--line-soft)] px-6 py-3 text-sm font-semibold text-[var(--brand)]"
                type="button"
              >
                Save for later
              </button>
            </div>
          </div>

          <aside className="market-soft-card h-fit p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dff2ff] font-bold text-[var(--brand)]">
                R
              </div>
              <div>
                <p className="text-sm text-[var(--ink-muted)]">Supplier</p>
                <p className="font-semibold text-[var(--ink)]">Guanjoi Trading LLC</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-[var(--ink-muted)]">
              <p>Germany, Berlin</p>
              <p>Verified Seller</p>
              <p>Worldwide shipping</p>
            </div>
            <button className="mt-5 w-full rounded-lg bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white" type="button">
              Send inquiry
            </button>
            <button className="mt-3 w-full rounded-lg border border-[var(--line-soft)] px-4 py-3 text-sm font-semibold text-[var(--brand)]" type="button">
              Seller's profile
            </button>
          </aside>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_260px]">
        <div className="market-card p-5">
          <div className="flex flex-wrap gap-2 border-b border-[var(--line-soft)] pb-4">
            <span className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white">
              Description
            </span>
            <span className="rounded-lg border border-[var(--line-soft)] px-4 py-2 text-sm text-[var(--ink-muted)]">
              Reviews
            </span>
            <span className="rounded-lg border border-[var(--line-soft)] px-4 py-2 text-sm text-[var(--ink-muted)]">
              Shipping
            </span>
          </div>

          <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink-muted)]">
            <p>
              This redesigned detail page follows the prototype structure with pricing tiers,
              seller information, thumbnail gallery, and supporting product metadata.
            </p>
            <p>
              The content remains powered by your live admin-managed products, so any item you add
              will automatically render inside this new presentation.
            </p>
          </div>
        </div>

        <aside className="market-card p-4">
          <p className="text-lg font-bold">You may like</p>
          <div className="mt-4 space-y-3">
            {products
              .filter((item) => item._id !== productData._id)
              .slice(0, 5)
              .map((item) => (
                <div key={item._id} className="flex gap-3">
                  <img
                    className="h-16 w-16 rounded-xl border border-[var(--line-soft)] object-cover"
                    src={item.image[0]}
                    alt={item.name}
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">
                      {currency}
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </aside>
      </section>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
