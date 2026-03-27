import React from "react";
import Title from "../components/Title";

const TermsConditions = () => {
  return (
    <div className="pb-20 max-w-4xl mx-auto">
      <div className="text-center text-3xl pt-10 border-t">
        <Title text1={"TERMS &"} text2={"CONDITIONS"} />
      </div>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-[var(--ink-muted)]">
        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Acceptance of Terms</h3>
          <p>
            By accessing and using the Forever website (forever.com), you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our site.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Intellectual Property Rights</h3>
          <p>
            The content, images, designs, and logos displayed on this site are protected by intellectual property laws and are the property of Forever and its partners. You may not reproduce, distribute, or use any portion of this site without our express written consent.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">User Conduct</h3>
          <p>
            By using our site, you agree not to:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Engage in any illegal or unauthorized activities.</li>
            <li>Post or transmit any content that is offensive, defamatory, or harmful.</li>
            <li>Attempt to gain unauthorized access to our systems or user accounts.</li>
            <li>Interfere with the site's proper functioning or security.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Limitation of Liability</h3>
          <p>
            Forever is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our site. We strive for accuracy, but we do not guarantee the site is free of errors or omissions.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[var(--ink)] mb-4">Governing Law</h3>
          <p>
            These terms are governed by and construed in accordance with the laws of the jurisdiction where our company is registered. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts in that region.
          </p>
        </section>

        <section className="text-xs italic pt-10 border-t">
          Last updated: March 2026. Forever reserve the right to modify these terms at any time.
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
