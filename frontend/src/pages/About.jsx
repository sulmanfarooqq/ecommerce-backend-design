import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div className="pb-20">
      <div className="text-center text-3xl pt-10 border-t">
        <Title text1={"ABOUT"} text2={"FOREVER"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:max-w-[450px] relative">
          <img
            className="w-full rounded-2xl shadow-premium transition-transform duration-500 hover:scale-[1.02]"
            src={assets.about_img}
            alt="about_img"
          />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[var(--brand)]/10 rounded-full blur-2xl -z-10" />
        </div>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-[var(--ink-muted)] leading-relaxed">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-[var(--ink)] text-lg font-bold tracking-tight">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="text-2xl py-8 mt-12">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="grid md:grid-cols-3 mb-20">
        <div className="border border-[var(--line-soft)] px-10 md:px-14 py-12 flex flex-col gap-5 transition-colors hover:bg-[var(--surface-muted)]">
          <b className="text-[var(--ink)] font-extrabold uppercase tracking-widest text-sm">Quality Assurance</b>
          <p className="text-[var(--ink-muted)] text-sm">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-[var(--line-soft)] px-10 md:px-14 py-12 flex flex-col gap-5 transition-colors hover:bg-[var(--surface-muted)]">
          <b className="text-[var(--ink)] font-extrabold uppercase tracking-widest text-sm">Convenience</b>
          <p className="text-[var(--ink-muted)] text-sm">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-[var(--line-soft)] px-10 md:px-14 py-12 flex flex-col gap-5 transition-colors hover:bg-[var(--surface-muted)] text-sm">
          <b className="text-[var(--ink)] font-extrabold uppercase tracking-widest text-sm">Exceptional Service</b>
          <p className="text-[var(--ink-muted)]">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
