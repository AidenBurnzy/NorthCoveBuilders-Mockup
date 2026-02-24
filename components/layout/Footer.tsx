import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="section-shell grid gap-10 py-14 text-center md:grid-cols-4 md:py-16 md:text-left">
        <div className="space-y-3 md:col-span-2">
          <div className="inline-flex items-center">
            <span className="inline-flex h-[3.25rem] w-[7.5rem] items-center justify-center rounded-xl bg-white px-2 py-1 md:w-[10.5rem]">
              <Image
                src="/brand/logo.png"
                alt="North Cove Builders logo"
                width={96}
                height={52}
                quality={100}
                className="h-full w-full object-contain md:hidden"
              />
              <Image
                src="/brand/logo-desktop.png"
                alt="North Cove Builders logo"
                width={260}
                height={120}
                quality={100}
                unoptimized
                className="hidden h-full w-full object-contain md:block"
              />
            </span>
          </div>
          <p className="mx-auto max-w-md text-white/85 md:mx-0">Feel at home before you even move in.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/80">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/80">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            <li>(616) 682-7422</li>
            <li>Hudsonville, Michigan</li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:underline">
                Facebook
              </a>
              <span className="mx-2">·</span>
              <a href="https://www.houzz.com" target="_blank" rel="noreferrer" className="hover:underline">
                Houzz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
