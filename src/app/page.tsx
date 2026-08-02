import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooterSection } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { Technologies } from "@/components/sections/technologies";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Team } from "@/components/sections/team";
import { Blog } from "@/components/sections/blog";
import { ReviewsFaq } from "@/components/sections/reviews-faq";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Technologies />
        <Services />
        <Portfolio />
        <Team />
        <Blog />
        <ReviewsFaq />
        <Contact />
      </main>
      <SiteFooterSection />
    </>
  );
}
