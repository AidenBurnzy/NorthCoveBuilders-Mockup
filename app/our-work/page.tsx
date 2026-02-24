import { Reveal } from "@/components/motion/Reveal";
import { PortfolioFilterGrid } from "@/components/sections/PortfolioFilterGrid";

export default function OurWorkPage() {
  return (
    <section className="section-shell !pt-40 md:!pt-[8.5rem]">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-brand md:text-left">Completed Project Portfolio</p>
        <h1 className="mt-3 text-center text-4xl text-brand md:text-left md:text-5xl">Our Work</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/80 md:mx-0 md:text-left">
          Browse completed North Cove Builders homes by style and project type.
        </p>
      </Reveal>

      <div className="mt-10">
        <PortfolioFilterGrid />
      </div>
    </section>
  );
}
