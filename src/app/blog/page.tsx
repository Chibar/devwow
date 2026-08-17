import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooterSection } from "@/components/layout/site-footer";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogGrid } from "@/components/blog/blog-grid";
import { Subscribe } from "@/components/blog/subscribe";
import { getBlogPage } from "@/lib/api/blog";
import { pageMetadata } from "@/lib/api/seo";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/blog");
}

export default async function BlogPage() {
  const page = await getBlogPage();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <BlogHero
          data={page.hero}
          featured={page.featured}
          categories={page.categories}
        />
        <BlogGrid
          eyebrow={page.listEyebrow}
          categories={page.categories}
          articles={page.articles}
        />
        <Subscribe data={page.subscribe} />
      </main>
      <SiteFooterSection />
    </>
  );
}
