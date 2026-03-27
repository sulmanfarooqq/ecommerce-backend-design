import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div className="pb-20">
      <div className="text-center text-3xl pt-10 border-t font-black tracking-tight text-[var(--ink)]">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center items-center md:flex-row gap-16 mb-28">
        <div className="w-full md:max-w-[480px] relative">
          <img
            className="w-full rounded-2xl shadow-premium transition-transform duration-500 hover:scale-[1.02]"
            src={assets.contact_img}
            alt="contact_img"
          />
          <div className="absolute -top-6 -left-6 h-32 w-32 bg-[var(--brand)]/10 rounded-full blur-2xl -z-10" />
        </div>
        
        <div className="flex flex-col justify-center items-start gap-8 md:w-1/3">
          <div className="space-y-2">
            <h3 className="font-extrabold text-xl tracking-tight text-[var(--ink)] uppercase">Our Flagship Store</h3>
            <p className="text-[var(--ink-muted)] leading-relaxed">
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[var(--ink-muted)] font-medium">
              Tel: <span className="text-[var(--ink)]">(415) 555-0132</span>
            </p>
            <p className="text-[var(--ink-muted)] font-medium">
              Email: <span className="text-[var(--ink)] underline">admin@forever.com</span>
            </p>
          </div>

          <div className="pt-6 border-t border-[var(--line-soft)] w-full">
            <h3 className="font-extrabold text-xl tracking-tight text-[var(--ink)] uppercase">Careers at Forever</h3>
            <p className="mt-3 text-[var(--ink-muted)] leading-relaxed">
              Explore global opportunities and help us redefine the future of fashion.
            </p>
            <button className="market-button mt-6 h-14 px-10">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
