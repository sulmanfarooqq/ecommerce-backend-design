import React from "react";

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="border-t border-[var(--line-soft)] py-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-2xl font-bold tracking-tight text-[var(--ink)]">
          Subscribe on our newsletter
        </p>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          Get daily news on upcoming offers from many suppliers all over the world.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="mx-auto mt-5 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            className="flex-1 rounded-xl border border-[var(--line-soft)] bg-white px-4 py-3 text-sm outline-none"
            type="email"
            placeholder="Email"
            required
          />
          <button className="rounded-xl bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
