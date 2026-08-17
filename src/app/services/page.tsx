import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooterSection } from "@/components/layout/site-footer";
import { ServicesHero } from "@/components/services/services-hero";
import { ServiceOffers } from "@/components/services/service-offers";
import { Process } from "@/components/services/process";
import { ServiceCases } from "@/components/services/service-cases";
import { ServicesFaq } from "@/components/services/services-faq";
import { ServicesCta } from "@/components/services/services-cta";
import { getServicesPage } from "@/lib/api/services";
import { pageMetadata } from "@/lib/api/seo";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/services");
}

export default async function ServicesPage() {
  const page = await getServicesPage();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ServicesHero data={page.hero} />
        <ServiceOffers
          eyebrow={page.offersEyebrow}
          title={page.offersTitle}
          description={page.offersDescription}
          offers={page.offers}
        />
        <Process
          eyebrow={page.processEyebrow}
          title={page.processTitle}
          steps={page.process}
          note={page.processNote}
        />
        <ServiceCases
          eyebrow={page.casesEyebrow}
          title={page.casesTitle}
          cases={page.cases}
          link={page.casesLink}
        />
        <ServicesFaq
          eyebrow={page.faqEyebrow}
          title={page.faqTitle}
          description={page.faqDescription}
          cta={page.faqCta}
          items={page.faq}
        />
        <ServicesCta data={page.cta} />
      </main>
      <SiteFooterSection />
    </>
  );
}
