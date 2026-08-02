import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ContactIcon } from "@/components/contacts/contact-icon";
import { ContactsForm } from "@/components/contacts/contacts-form";
import type { ContactsPage } from "@/lib/types";

export function ContactsChannels({ data }: { data: ContactsPage }) {
  return (
    <section className="bg-surface-light py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
                {data.channelsEyebrow}
              </p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-surface-dark lg:text-[38px]">
                {data.channelsTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-500">
                {data.channelsDescription}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {data.channels.map((channel) => {
                const content = (
                  <>
                    <ContactIcon name={channel.icon} iconClassName="size-5" />
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-brand-700">
                        {channel.label}
                      </span>
                      <span className="mt-1 block font-display text-base font-bold text-surface-dark">
                        {channel.value}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-200">
                        {channel.note}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={channel.id}>
                    {channel.href ? (
                      <Link
                        href={channel.href}
                        className="flex gap-5 rounded-[14px] border border-brand-700/16 bg-white p-5 transition-colors hover:border-brand-700/45"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="flex gap-5 rounded-[14px] border border-brand-700/16 bg-white p-5">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-3 rounded-[14px] border border-brand-700/18 bg-brand-900/5 p-6">
              <p className="text-xs uppercase tracking-wide text-brand-700">
                {data.socialsLabel}
              </p>
              <div className="flex flex-wrap gap-3">
                {data.socials.map((social) => (
                  <Link
                    key={social.code}
                    href={social.href}
                    className="flex items-center gap-2 rounded-[10px] border border-brand-700/22 bg-white px-4 py-2.5 transition-colors hover:border-brand-700"
                  >
                    <span className="text-xs font-bold text-muted-500">
                      {social.code}
                    </span>
                    <span className="text-sm font-semibold text-muted-500">
                      {social.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <ContactsForm data={data.form} />
        </div>
      </Container>
    </section>
  );
}
