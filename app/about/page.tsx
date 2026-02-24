"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { teamMembers } from "@/lib/site-data";

const sectionIds = [
  { id: "founder", label: "Founder Story" },
  { id: "team", label: "Meet the Team" },
  { id: "values", label: "Our Values" },
  { id: "process", label: "Our Process" },
];

const processSteps = [
  "Consultation",
  "Design",
  "Bid",
  "Build",
  "Pre-Close",
  "1-Year Review",
];

export default function AboutPage() {
  const onJump = (value: string) => {
    const element = document.getElementById(value);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="bg-surface">
        <div className="section-shell !pt-40 pb-12 md:!pt-[8.5rem]">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-brand md:text-left">About North Cove Builders</p>
          <h1 className="mt-3 text-center text-4xl text-brand md:text-left md:text-5xl">A personal builder experience from first conversation to final walkthrough.</h1>
          <div className="mx-auto mt-6 max-w-sm md:mx-0">
            <label className="grid gap-2 text-sm font-medium text-foreground/80">
              Jump to section
              <select
                onChange={(event) => onJump(event.target.value)}
                defaultValue=""
                className="rounded-xl border border-black/10 bg-white px-4 py-3"
              >
                <option value="" disabled>
                  Select a section
                </option>
                {sectionIds.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section id="founder" className="section-shell scroll-mt-28">
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative mx-auto h-[360px] w-full max-w-md overflow-hidden rounded-2xl md:mx-0 md:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                alt="Neal, founder of North Cove Builders"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl text-brand">Founder Story</h2>
              <p className="mt-4 leading-8 text-foreground/80">
                Neal started North Cove Builders to bring a more personal, grounded approach to custom home building in West Michigan. With a focus on trust, communication, and lasting craftsmanship, he works directly with each homeowner to create spaces that truly fit their lives.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="team" className="bg-surface scroll-mt-28">
        <div className="section-shell">
          <Reveal>
            <h2 className="mb-8 text-center text-3xl text-brand md:text-left">Meet the Team</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Reveal key={member.name}>
                <article className="overflow-hidden rounded-2xl bg-white">
                  <div className="relative h-72">
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-5 text-center md:text-left">
                    <h3 className="text-xl text-brand">{member.name}</h3>
                    <p className="mt-1 text-sm text-foreground/70">{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="section-shell scroll-mt-28">
        <Reveal>
          <h2 className="text-center text-3xl text-brand md:text-left">Our Values</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Reveal>
            <article className="card-soft">
              <h3 className="text-center text-xl text-brand md:text-left">Relationships First</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/80">We stay close to every client and keep communication clear through each phase.</p>
            </article>
          </Reveal>
          <Reveal>
            <article className="card-soft">
              <h3 className="text-center text-xl text-brand md:text-left">Craftsmanship</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/80">We build with detail, care, and quality materials that stand the test of time.</p>
            </article>
          </Reveal>
          <Reveal>
            <article className="card-soft">
              <h3 className="text-center text-xl text-brand md:text-left">Transparency</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/80">From bid to final walkthrough, expectations and decisions stay visible and simple.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="process" className="bg-surface scroll-mt-28">
        <div className="section-shell">
          <Reveal>
            <h2 className="mb-8 text-center text-3xl text-brand md:text-left">Our Process</h2>
          </Reveal>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step}>
                <li className="card-soft text-center md:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Step {index + 1}</p>
                  <p className="mt-2 text-lg text-foreground">{step}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
