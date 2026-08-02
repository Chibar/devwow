/**
 * Доменные типы главной страницы.
 *
 * Формы объектов повторяют то, что позже будет отдавать FastAPI:
 * компоненты завязаны только на эти типы, поэтому переход с моков
 * на реальный бэкенд не затрагивает разметку.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroMetric {
  value: string;
  label: string;
  delta: string;
}

export interface HeroTrafficPoint {
  day: string;
  /** Доля от максимума, 0–1 */
  value: number;
  highlighted?: boolean;
}

export interface HeroEvent {
  title: string;
  time: string;
  accent?: boolean;
}

export interface Hero {
  badge: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  stats: HeroStat[];
  dashboard: {
    domain: string;
    metrics: HeroMetric[];
    trafficTitle: string;
    trafficDelta: string;
    traffic: HeroTrafficPoint[];
    eventsTitle: string;
    events: HeroEvent[];
  };
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  /** Буква для плитки-логотипа */
  monogram: string;
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export interface PortfolioCase {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  metrics: string[];
  stack: string[];
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  skills: string[];
  monogram: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  href: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  position: string;
  rating: number;
  monogram: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactBlock {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  disclaimer: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface SiteFooter {
  description: string;
  socials: NavLink[];
  navigation: FooterLinkGroup;
  contacts: { email: string; phone: string; address: string };
  copyright: string;
  legal: NavLink[];
}

/* ─── Страница «О нас» ─────────────────────────────────────────────── */

export interface AboutCardRow {
  label: string;
  value: string;
}

export interface AboutHero {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  description: string;
  cta: NavLink;
  card: {
    monogram: string;
    name: string;
    tagline: string;
    rows: AboutCardRow[];
    status: string;
  };
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface Principle {
  id: string;
  /** Порядковый номер-водяной знак на карточке: «01», «02», «03» */
  index: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutTeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  skills: string[];
  /** Оттенок градиента аватара — в макете у каждого свой */
  accent: "deep" | "mid" | "bright";
}

export interface AboutTechCta {
  title: string;
  description: string;
  cta: NavLink;
}

export interface AboutPage {
  hero: AboutHero;
  stats: AboutStat[];
  principlesEyebrow: string;
  principlesTitle: string;
  principlesDescription: string;
  principles: Principle[];
  teamEyebrow: string;
  teamTitle: string;
  team: AboutTeamMember[];
  teamNote: string;
  techEyebrow: string;
  techTitle: string;
  techNote: string;
  technologies: Technology[];
  techCta: AboutTechCta;
}

/** Полезная нагрузка формы заявки. */
export interface LeadInput {
  name: string;
  contact: string;
  message: string;
}

export interface LeadResult {
  ok: boolean;
  message: string;
}
