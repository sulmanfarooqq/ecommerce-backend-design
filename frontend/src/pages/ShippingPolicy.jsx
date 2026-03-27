import React from "react";
import Title from "../components/Title";

const ShippingPolicy = () => {
  return (
    <div className="pb-20 max-w-4xl mx-auto">
      <div className="text-center text-3xl pt-10 border-t">
        <Title text1={"SHIPPING"} text2={"POLICY"} />
      </div>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-[var(--ink-muted)]">
        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Domestic and International Delivery</h3>
          <p>
            At Forever, we're dedicated to delivering your favorite styles globally. We partner with reliable carriers like DHL, FedEx, and UPS to ensure your items reach you safely and promptly.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
           <div className="market-card p-6">
              <h4 className="font-extrabold text-[var(--ink)]">Standard Delivery</h4>
              <p className="mt-2">Free on all orders over $150. Estimated delivery time is 5-10 business days depending on location.</p>
           </div>
           <div className="market-card p-6">
              <h4 className="font-extrabold text-[var(--ink)]">Express Shipping</h4>
              <p className="mt-2">Available for a flat rate of $25. Your order will reach you in 2-4 business days worldwide.</p>
           </div>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Order Processing</h3>
          <p>
            Most orders are processed and shipped within 1-2 business days. During peak seasons (holidays or big collection drops), please allow up to 4 business days for processing.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Customs, Duties, and Taxes</h3>
          <p>
            International orders may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. Forever is not responsible for these charges if they are applied and are your responsibility as the customer.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Shipment Tracking</h3>
          <p>
            When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.
          </p>
          <div className="mt-6">
             <button className="market-button px-6">Track Your Order</button>
          </div>
        </section>

        <section className="text-xs italic pt-10 border-t">
          Last updated: March 2026. Forever reserves the right to amend this policy at any time.
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
