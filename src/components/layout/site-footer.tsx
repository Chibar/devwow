import Link from "next/link";

import { Container } from "@/components/ui/container";
import { getFooter } from "@/lib/api/home";

export async function SiteFooterSection() {
  const footer = await getFooter();

  return (
    <footer className="border-t border-white/5 bg-ink px-0 pb-8 pt-16">
      <Container>
        <div className="grid gap-10 border-b border-white/5 pb-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-extrabold tracking-tight text-white">
              K<span className="text-brand-400">T</span>S
            </p>
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
              Контакты
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
