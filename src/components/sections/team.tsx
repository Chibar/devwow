import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getTeam } from "@/lib/api/home";

export async function Team() {
  const team = await getTeam();

  return (
    <section id="team" className="bg-surface-light py-24">
      <Container>
        <SectionHeading
          eyebrow="Не студенты"
          title="Кто мы"
          description="Небольшая, но матёрая команда — каждый прошёл путь от линейного разработчика до экспертной роли."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.id}
              className="flex flex-col gap-5 rounded-[14px] border border-brand-700/20 bg-white p-7"
            >
              <div className="flex items-center gap-4">
                <span className="brand-gradient flex size-14 shrink-0 items-center justify-center rounded-[14px] font-display text-xl font-extrabold text-white">
                  {member.monogram}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-surface-dark">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand-700">{member.role}</p>
                  <p className="text-xs text-muted-100">{member.experience}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-500">{member.bio}</p>

              <ul className="mt-auto flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg bg-brand-900/7 px-2.5 py-1 text-xs text-brand-900"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
