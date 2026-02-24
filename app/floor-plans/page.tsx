import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { floorPlans } from "@/lib/site-data";

export default function FloorPlansPage() {
  return (
    <section className="section-shell !pt-40 md:!pt-[8.5rem]">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-brand md:text-left">Floor Plans</p>
        <h1 className="mt-3 text-center text-3xl text-brand sm:text-4xl md:text-left md:text-5xl">Start with a plan, then make it yours.</h1>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {floorPlans.map((image, index) => (
          <Reveal key={`${image}-${index}`}>
            <article className="overflow-hidden rounded-2xl border border-black/5 bg-white">
              <div className="relative h-72">
                <Image src={image} alt={`Floor plan ${index + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 text-center md:text-left">
          <Link href="/contact" className="btn-brand">
            Customize a Floor Plan
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
