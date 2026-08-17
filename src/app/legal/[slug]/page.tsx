import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooterSection } from "@/components/layout/site-footer";
import { Container } from "@/components/ui/container";
import { richText } from "@/components/ui/rich-text";
import { getLegalPage, getLegalPages, getSiteMeta, metadataFrom } from "@/lib/api/seo";

/**
 * Юридические документы: политика, условия работы и всё, на что
 * ссылается подвал. Текст правится в админке («Страницы → Документы»),
 * разметка — та же, что в статьях: `**жирный**` и `` `код` ``.
 */
export async function generateStaticParams() {
  const pages = await getLegalPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [document, site] = await Promise.all([getLegalPage(slug), getSiteMeta()]);

  if (!document) return { title: "Документ не найден" };

  return metadataFrom(site, {
    route: `/legal/${slug}`,
    name: document.title,
    title: document.title,
    description: document.description,
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    canonical: "",
    // Документы полезны людям, но в выдаче им делать нечего.
    noindex: true,
  });
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = await getLegalPage(slug);

  if (!document) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-surface-light py-24">
          <Container>
            <div className="mx-auto max-w-[860px]">
              {document.eyebrow ? (
                <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
                  {document.eyebrow}
                </p>
              ) : null}

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-surface-dark">
                {document.title}
              </h1>

              {document.updatedLabel ? (
                <p className="mt-4 text-sm text-muted-400">{document.updatedLabel}</p>
              ) : null}

              <div className="mt-10">
                {document.body.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="mt-10 font-display text-2xl font-bold tracking-tight text-surface-dark first:mt-0"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={index} className="mt-5 flex flex-col gap-2">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="pl-5 text-base leading-relaxed text-muted-500 before:mr-3 before:-ml-5 before:text-brand-400 before:content-['—']"
                          >
                            {richText(item)}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p
                      key={index}
                      className="mt-5 text-base leading-relaxed text-muted-500"
                    >
                      {richText(block.text)}
                    </p>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooterSection />
    </>
  );
}
