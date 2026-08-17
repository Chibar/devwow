import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooterSection } from "@/components/layout/site-footer";
import { ContactsHero } from "@/components/contacts/contacts-hero";
import { ContactsChannels } from "@/components/contacts/contacts-channels";
import { ContactsMap } from "@/components/contacts/contacts-map";
import { ContactsRequisites } from "@/components/contacts/contacts-requisites";
import { getContactsPage } from "@/lib/api/contacts";
import { pageMetadata } from "@/lib/api/seo";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/contacts");
}

export default async function ContactsPage() {
  const page = await getContactsPage();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactsHero data={page.hero} />
        <ContactsChannels data={page} />
        <ContactsMap data={page.map} />
        <ContactsRequisites data={page.requisites} />
      </main>
      <SiteFooterSection />
    </>
  );
}
