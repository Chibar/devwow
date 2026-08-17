import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooterSection } from "@/components/layout/site-footer";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStats } from "@/components/about/about-stats";
import { Principles } from "@/components/about/principles";
import { AboutTeam } from "@/components/about/about-team";
import { AboutTech } from "@/components/about/about-tech";
import { getAboutPage } from "@/lib/api/about";
import { pageMetadata } from "@/lib/api/seo";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/about");
}

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutHero data={about.hero} />
        <AboutStats stats={about.stats} />
        <Principles
          eyebrow={about.principlesEyebrow}
          title={about.principlesTitle}
          description={about.principlesDescription}
          items={about.principles}
        />
        <AboutTeam
          eyebrow={about.teamEyebrow}
          title={about.teamTitle}
          members={about.team}
          note={about.teamNote}
        />
        <AboutTech
          eyebrow={about.techEyebrow}
          title={about.techTitle}
          note={about.techNote}
          technologies={about.technologies}
          cta={about.techCta}
        />
      </main>
      <SiteFooterSection />
    </>
  );
}
