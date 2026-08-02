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

/* ─── Страница «Услуги» ────────────────────────────────────────────── */

/** Оттенок брендового градиента — в макете карточки различаются им. */
export type BrandAccent = "deep" | "mid" | "bright" | "light";

export interface ServiceTeaser {
  id: string;
  title: string;
  subtitle: string;
  accent: BrandAccent;
}

export interface ServicesHero {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  description: string;
  teasers: ServiceTeaser[];
}

export interface ServiceOffer {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  href: string;
}

export interface ProcessStep {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCase {
  id: string;
  name: string;
  category: string;
  description: string;
  metrics: string[];
  status: string;
  pattern: string;
  accent: BrandAccent;
  href: string;
}

export interface ServicesCta {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  primary: NavLink;
  secondary: NavLink;
}

export interface ServicesPage {
  hero: ServicesHero;
  offersEyebrow: string;
  offersTitle: string;
  offersDescription: string;
  offers: ServiceOffer[];
  processEyebrow: string;
  processTitle: string;
  process: ProcessStep[];
  processNote: string;
  casesEyebrow: string;
  casesTitle: string;
  cases: ServiceCase[];
  casesLink: NavLink;
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  faqCta: NavLink;
  faq: FaqItem[];
  cta: ServicesCta;
}

/* ─── Страница «Проекты» ───────────────────────────────────────────── */

export interface ProjectsHero {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  description: string;
  stats: AboutStat[];
}

export interface ProjectCategory {
  id: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  /** id категории из `ProjectCategory` — по нему работает фильтр */
  categoryId: string;
  category: string;
  description: string;
  stack: string[];
  year: string;
  status: string;
  /** Завершённый проект или ещё в работе — от этого зависит вид бейджа */
  inProgress?: boolean;
  visual: string;
  href: string;
}

export interface ProjectsCta {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  benefits: string[];
  primary: NavLink;
  secondary: NavLink;
}

export interface ProjectsPage {
  hero: ProjectsHero;
  listTitle: string;
  categories: ProjectCategory[];
  projects: Project[];
  cta: ProjectsCta;
}

/* ─── Страница «Блог» ──────────────────────────────────────────────── */

export interface BlogHero {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  description: string;
}

export interface ArticleCategory {
  id: string;
  label: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  /** id рубрик из `ArticleCategory` — по ним работает фильтр и подписи */
  categoryIds: string[];
  readingTime: string;
  date: string;
  visual: string;
  href: string;
}

export interface FeaturedArticle extends Article {
  badge: string;
}

export interface SubscribeBlock {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  placeholder: string;
  submitLabel: string;
  disclaimer: string;
}

/**
 * Блок тела статьи. В тексте `paragraph` поддерживается инлайн-разметка:
 * `**жирный**` и `` `код` ``.
 */
export type ArticleBlock =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "quote"; text: string; author: string }
  | { type: "figure"; src: string; caption: string }
  | { type: "code"; filename: string; code: string }
  | { type: "stats"; items: { value: string; label: string }[] };

export interface ArticleAuthor {
  initials: string;
  name: string;
  role: string;
  bio: string;
  link: NavLink;
}

export interface ArticleDetail {
  slug: string;
  title: string;
  excerpt: string;
  categoryIds: string[];
  /** Подпись рубрики в хлебных крошках */
  breadcrumb: string;
  readingTime: string;
  publishedLabel: string;
  publishedAt: string;
  cover?: { src: string; caption: string };
  author: ArticleAuthor;
  body: ArticleBlock[];
  tags: string[];
  shareLabel: string;
  shareTargets: string[];
}

export interface BlogPage {
  hero: BlogHero;
  featured: FeaturedArticle;
  listEyebrow: string;
  categories: ArticleCategory[];
  articles: Article[];
  subscribe: SubscribeBlock;
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
