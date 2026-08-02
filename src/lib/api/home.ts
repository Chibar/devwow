import * as mock from "@/lib/mock/home";
import { apiFetch, isApiEnabled } from "@/lib/api/client";
import type {
  Client,
  ContactBlock,
  FaqItem,
  Hero,
  NavLink,
  PortfolioCase,
  Post,
  Review,
  Service,
  SiteFooter,
  TeamMember,
  Technology,
} from "@/lib/types";

/**
 * Слой доступа к данным главной страницы.
 *
 * Сейчас каждая функция отдаёт мок. Когда появится FastAPI, достаточно
 * задать `NEXT_PUBLIC_API_URL` — сигнатуры и типы останутся прежними,
 * компоненты трогать не придётся.
 */

const REVALIDATE = 300;

async function fromApiOrMock<T>(path: string, fallback: T): Promise<T> {
  if (!isApiEnabled) return fallback;
  return apiFetch<T>(path, { revalidate: REVALIDATE });
}

export function getNavigation(): Promise<NavLink[]> {
  return fromApiOrMock("/navigation", mock.navigation);
}

export function getHero(): Promise<Hero> {
  return fromApiOrMock("/hero", mock.hero);
}

export function getClients(): Promise<Client[]> {
  return fromApiOrMock("/clients", mock.clients);
}

export function getTechnologies(): Promise<Technology[]> {
  return fromApiOrMock("/technologies", mock.technologies);
}

export function getServices(): Promise<Service[]> {
  return fromApiOrMock("/services", mock.services);
}

export function getPortfolio(): Promise<PortfolioCase[]> {
  return fromApiOrMock("/portfolio", mock.portfolio);
}

export function getTeam(): Promise<TeamMember[]> {
  return fromApiOrMock("/team", mock.team);
}

export function getPosts(): Promise<Post[]> {
  return fromApiOrMock("/posts", mock.posts);
}

export function getReviews(): Promise<Review[]> {
  return fromApiOrMock("/reviews", mock.reviews);
}

export function getFaq(): Promise<FaqItem[]> {
  return fromApiOrMock("/faq", mock.faq);
}

export function getContactBlock(): Promise<ContactBlock> {
  return fromApiOrMock("/contact", mock.contact);
}

export function getFooter(): Promise<SiteFooter> {
  return fromApiOrMock("/footer", mock.footer);
}

/** Отправка заявки живёт в `@/lib/api/leads` — её импортирует клиентская форма. */
