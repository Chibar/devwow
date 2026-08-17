import Image from "next/image";
import Link from "next/link";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { getFooter } from "@/lib/api/home";
import { getSiteMeta } from "@/lib/api/seo";
import type { BrandInfo } from "@/lib/types";

export async function SiteFooterSection() {
  const [footer, { brand, layout }] = await Promise.all([getFooter(), getSiteMeta()]);

  return (
    <footer className="border-t border-white/5 bg-ink px-0 pb-8 pt-16">
      <Container>
        <div className="grid gap-10 border-b border-white/5 pb-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <FooterLogo brand={brand} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-500">
              {footer.description}
            </p>
            <ul className="mt-6 flex gap-3">
              {footer.socials.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    className="flex size-9 items-center justify-center rounded-[10px] border border-white/8 text-xs font-semibold text-muted-500 transition-colors hover:border-brand-700 hover:text-brand-400"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-brand-700">
              {footer.navigation.title}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {footer.navigation.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/35 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-brand-700">
              {layout.footerContactsTitle}
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-muted-500">
              <li>
                <a
                  href={`mailto:${footer.contacts.email}`}
                  className="transition-colors hover:text-brand-400"
                >
                  {footer.contacts.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.contacts.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-brand-400"
                >
                  {footer.contacts.phone}
                </a>
              </li>
              <li>{footer.contacts.address}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <p className="text-xs font-semibold text-brand-400">{footer.copyright}</p>
          <ul className="flex flex-wrap gap-5">
            {footer.legal.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-white/20 transition-colors hover:text-brand-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

/**
 * Логотип подвала: картинка, если её загрузили, иначе текст с
 * подсвеченной частью. Раньше и текст, и подсветка были в вёрстке.
 */
function FooterLogo({ brand }: { brand: BrandInfo }) {
  if (brand.footerLogo) {
    const src = brand.footerLogo.startsWith("http")
      ? brand.footerLogo
      : asset(brand.footerLogo);

    return (
      <Image
        src={src}
        alt={brand.logoAlt}
        width={brand.logoWidth}
        height={brand.logoHeight}
        className="h-9 w-auto"
      />
    );
  }

  const text = brand.footerLogoText;
  const accent = brand.footerLogoAccent;
  const at = accent ? text.indexOf(accent) : -1;

  return (
    <p className="font-display text-3xl font-extrabold tracking-tight text-white">
      {at < 0 ? (
        text
      ) : (
        <>
          {text.slice(0, at)}
          <span className="text-brand-400">{accent}</span>
          {text.slice(at + accent.length)}
        </>
      )}
    </p>
  );
}
