import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center gap-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
          {text1}
        </p>
        <p className="text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
          {text2}
        </p>
      </div>
      <span className="hidden h-px w-12 bg-[var(--line-strong)] sm:block" />
    </div>
  );
};

export default Title;
