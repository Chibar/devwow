import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { asset } from "@/lib/base-path";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { buttonClasses } from "@/components/ui/button";
import { getNavigation } from "@/lib/api/home";

export async function SiteHeader() {
  const navigation = await getNavigation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="KTS Studio">
            <Image
              src={asset("/figma/logo.svg")}
              alt="KTS Studio"
              width={220}
              height={44}
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
            <div className="hidden sm:block">
              <Link href="/contacts" className={buttonClasses("primary", "sm")}>
                Обсудить проект
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <MobileNav items={navigation} />
          </div>
        </div>
      </Container>
    </header>
  );
}
