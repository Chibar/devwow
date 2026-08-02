import { Container } from "@/components/ui/container";
import { withEmphasis } from "@/components/ui/emphasis";
import { cn } from "@/lib/cn";
import type { AboutTeamMember } from "@/lib/types";

/** Оттенки аватаров из макета — у каждого участника свой. */
const accents: Record<AboutTeamMember["accent"], string> = {
  deep: "bg-[linear-gradient(135deg,rgba(0,98,112,0.8)_0%,rgba(0,98,112,1)_100%)]",
  mid: "bg-[linear-gradient(135deg,rgba(0,147,148,0.8)_0%,rgba(0,147,148,1)_100%)]",
  bright:
    "bg-[linear-gradient(135deg,rgba(0,224,199,0.8)_0%,rgba(0,224,199,1)_100%)]",
};

export function AboutTeam({
  eyebrow,
  title,
  members,
  note,
}: {
  eyebrow: string;
  title: string;
  members: AboutTeamMember[];
  note: string;
}) {
  return (
    <section className="bg-surface-dark py-28">
      <Container>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-brand-700">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white lg:text-[54px]">
            {title}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.id}
              className="flex flex-col gap-6 rounded-2xl border border-brand-700/22 bg-ink p-8"
            >
              <div className="flex items-center gap-5">
                <span
                  className={cn(
                    "flex size-16 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-extrabold text-white",
                    accents[member.accent],
                  )}
                >
                  {member.initials}
                </span>
                <span>
                  <span className="block font-display text-lg font-bold text-white">
                    {member.name}
                  </span>
                  <span className="block text-sm text-brand-700">{member.role}</span>
                  <span className="mt-0.5 block text-xs text-muted-600">
                    {member.experience}
                  </span>
                </span>
              </div>

              <span aria-hidden className="h-px bg-white/5" />

              <p className="text-sm leading-relaxed text-muted-300">{member.bio}</p>

              <ul className="mt-auto flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-brand-700/18 bg-brand-700/10 px-3 py-1 text-xs text-brand-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-12 flex items-center gap-4 rounded-[14px] border border-brand-400/12 bg-brand-400/5 px-8 py-5 text-sm text-white/45">
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-brand-400" />
          <span>{withEmphasis(note)}</span>
        </p>
      </Container>
    </section>
  );
}
