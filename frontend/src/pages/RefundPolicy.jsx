import React from "react";
import Title from "../components/Title";

const RefundPolicy = () => {
  return (
    <div className="pb-20 max-w-4xl mx-auto">
      <div className="text-center text-3xl pt-10 border-t">
        <Title text1={"REFUND"} text2={"POLICY"} />
      </div>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-[var(--ink-muted)]">
        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Returns and Exchanges</h3>
          <p>
            At Forever, we want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, we offer a 30-day return policy for most items.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Eligibility for Returns</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Items must be in original, unworn, and unwashed condition.</li>
            <li>Tags must be attached and original packaging included.</li>
            <li>Returns must be initiated within 30 days of the delivery date.</li>
            <li>Proof of purchase (invoice or order confirmation) is required.</li>
          </ul>
        </section>

        <section className="market-card p-6 bg-[var(--surface-muted)] border-none">
          <h3 className="text-lg font-bold text-[var(--ink)] mb-2">Non-Returnable Items</h3>
          <p>
            Due to hygiene and safety reasons, we cannot accept returns on undergarments, swimwear (if hygiene liner is removed), beauty products, and pierced jewelry unless faulty.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">How to Initiate a Return</h3>
          <p>
            To start a return, please visit our <span className="text-[var(--brand)] underline cursor-pointer">Return Portal</span> or contact our customer support at admin@forever.com. Once your return is approved, we will provide you with a prepaid shipping label.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Refund Processing</h3>
          <p>
            Once we receive and inspect your returned item, we will process your refund within 5-7 business days. The refund will be credited to your original payment method. Please note that shipping fees are non-refundable.
          </p>
        </section>

        <section className="text-xs italic pt-10 border-t">
          Last updated: March 2026. Forever reserves the right to amend this policy at any time.
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
