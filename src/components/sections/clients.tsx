import { Container } from "@/components/ui/container";
import { getClients } from "@/lib/api/home";

export async function Clients() {
  const clients = await getClients();

  return (
    <section className="border-b border-brand-700/20 bg-surface-light pb-20">
      <Container>
        <p className="eyebrow text-center text-muted-100">Нам доверяют</p>

        <ul className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl border border-brand-700/12 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <li
              key={client.id}
              className="flex flex-col items-center justify-center gap-1.5 border-b border-r border-brand-700/10 bg-white px-4 py-6 last:border-r-0"
            >
              <span className="brand-gradient mb-1 flex size-10 items-center justify-center rounded-[10px] font-display text-sm font-extrabold text-white">
                {client.monogram}
              </span>
              <p className="font-display text-sm font-bold text-surface-dark">
                {client.name}
              </p>
              <p className="text-center text-[10px] leading-4 text-muted-200">
                {client.industry}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
