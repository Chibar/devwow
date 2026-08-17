import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { buttonClasses } from "@/components/ui/button";
import { getNavigation } from "@/lib/api/home";
import { getSiteMeta } from "@/lib/api/seo";

export async function SiteHeader() {
  const [navigation, { brand, layout }] = await Promise.all([
    getNavigation(),
    getSiteMeta(),
  ]);

  // Логотип из медиатеки приезжает абсолютным адресом, из public/ —
  // относительным. `asset` нужен только второму: он дописывает basePath.
  const logo = brand.logo.startsWith("http") ? brand.logo : asset(brand.logo);
  const cta = layout.headerCta;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label={brand.logoAlt}>
            <Image
              src={logo}
              alt={brand.logoAlt}
              width={brand.logoWidth}
              height={brand.logoHeight}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/55 transition-colors hover:text-brand-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Обёртка, а не `hidden` на самой кнопке: display-утилиты Tailwind
                лежат в одном слое и `inline-flex` перебивал бы `hidden`. */}
            {cta.label ? (
              <div className="hidden sm:block">
                <Link href={cta.href} className={buttonClasses("primary", "sm")}>
                  {cta.label}
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ) : null}
            <MobileNav items={navigation} cta={cta} />
          </div>
        </div>
      </Container>
    </header>
  );
}
