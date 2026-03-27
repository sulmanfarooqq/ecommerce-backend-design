import React from "react";
import Title from "../components/Title";

const PrivacyPolicy = () => {
  return (
    <div className="pb-20 max-w-4xl mx-auto">
      <div className="text-center text-3xl pt-10 border-t">
        <Title text1={"PRIVACY"} text2={"POLICY"} />
      </div>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-[var(--ink-muted)]">
        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Information We Collect</h3>
          <p>
            At Forever, we prioritize your privacy. We collect personal information you provide directly, such as your name, email, billing/shipping address, and payment information when you place an order or create an account.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">How We Use Your Information</h3>
          <p>
            We use your data to:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Process and fulfill your orders.</li>
            <li>Communicate with you regarding your orders or support requests.</li>
            <li>Send promotional offers and updates (if you've opted-in).</li>
            <li>Enhance and personalize your shopping experience.</li>
            <li>Protect against fraud and ensure platform security.</li>
          </ul>
        </section>

        <section className="market-card p-6 border-none bg-[var(--surface-muted)]">
          <h4 className="font-bold text-[var(--ink)]">Data Security</h4>
          <p className="mt-2">
            We employ industry-standard encryption and security protocols (SSL/TLS) to ensure your data stays safe. We never sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Cookies and Analytics</h3>
          <p>
            Our website uses cookies to recognize your browser, capture certain information, and remember your cart. We also use analytics tools—such as Google Analytics—to understand how you use our site and how we can improve.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Your Rights</h3>
          <p>
            You have the right to access, correct, or delete any personal information we hold about you. You can update your profile directly through your account dashboard or contact our privacy officer at privacy@forever.com.
          </p>
        </section>

        <section className="text-xs italic pt-10 border-t">
          Last updated: March 2026. This policy may be updated periodically.
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
