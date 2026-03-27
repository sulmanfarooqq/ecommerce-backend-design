import React from "react";
import Title from "../components/Title";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "When your order ships, we'll send you an email with a tracking number and a link to the carrier's website. You can also track it directly through your Forever account dashboard.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in their original condition and packaging. For more details, please visit our Refund Policy page.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 150 countries worldwide. Shipping times and fees vary depending on the destination. You can find more info on our Shipping Policy page.",
    },
    {
      question: "How do I contact customer support?",
      answer: "Our customer support team is available 24/7. You can reach us at admin@forever.com or visit our Contact Us page for more options.",
    },
    {
      question: "Which payment methods do you accept?",
      answer: "We accept all major credit cards, Stripe, and Cash on Delivery (COD) for selected regions.",
    },
  ];

  return (
    <div className="pb-20 max-w-4xl mx-auto">
      <div className="text-center text-3xl pt-10 border-t">
        <Title text1={"HELP"} text2={"CENTER"} />
        <p className="mt-4 text-sm text-[var(--ink-muted)]">
          Frequently asked questions and support resources.
        </p>
      </div>

      <div className="mt-16 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="market-card p-6 transition-all hover:bg-[var(--surface-muted)]">
            <h3 className="text-lg font-extrabold tracking-tight text-[var(--ink)]">
              {faq.question}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t pt-10 text-center">
        <h3 className="text-xl font-black">Still need help?</h3>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">Our support experts are just an email away.</p>
        <button className="market-button mt-8 px-10 h-14">Contact Support Now</button>
      </div>
    </div>
  );
};

export default HelpCenter;
