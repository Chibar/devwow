"""
Pydantic-схемы ответов API — зеркало `src/lib/types.ts` фронтенда.

Сгенерировано вручную по типам фронта и сверено с ними поле в поле.
Положить в `app/schemas/` бэкенда (при желании разбить по файлам).

Ключевое: наружу всё отдаётся в camelCase. Внутри моделей поля названы
так же, как в TS, поэтому alias_generator здесь не нужен — но если в ORM
поля в snake_case, добавьте `alias_generator=to_camel` в `CamelModel`
и сериализуйте через `model_dump(by_alias=True)`.
"""

from __future__ import annotations

from typing import Annotated, Literal, Union

from pydantic import BaseModel, ConfigDict, Field


class Schema(BaseModel):
    """Базовая модель: разрешает создание из ORM-объектов."""

    model_config = ConfigDict(from_attributes=True)


# ─── Общее ────────────────────────────────────────────────────────────


class NavLink(Schema):
    label: str
    href: str


BrandAccent = Literal["deep", "mid", "bright", "light"]
TeamAccent = Literal["deep", "mid", "bright"]
ContactIconName = Literal["phone", "mail", "telegram", "address", "clock"]


# ─── Главная ──────────────────────────────────────────────────────────


class HeroStat(Schema):
    value: str
    label: str


class HeroMetric(Schema):
    value: str
    label: str
    delta: str


class HeroTrafficPoint(Schema):
    day: str
    value: float = Field(ge=0, le=1, description="Доля от максимума, 0–1")
    highlighted: bool | None = None


class HeroEvent(Schema):
    title: str
    time: str
    accent: bool | None = None


class HeroDashboard(Schema):
    domain: str
    metrics: list[HeroMetric]
    trafficTitle: str
    trafficDelta: str
    traffic: list[HeroTrafficPoint]
    eventsTitle: str
    events: list[HeroEvent]


class Hero(Schema):
    badge: str
    titleLead: str
    titleAccent: str
    description: str
    primaryCta: NavLink
    secondaryCta: NavLink
    stats: list[HeroStat]
    dashboard: HeroDashboard


class Client(Schema):
    id: str
    name: str
    industry: str
    monogram: str


class Technology(Schema):
    id: str
    name: str
    icon: str


class Service(Schema):
    id: str
    title: str
    description: str
    icon: str
    features: list[str]
    href: str


class PortfolioCase(Schema):
    id: str
    title: str
    category: str
    status: str
    description: str
    metrics: list[str]
    stack: list[str]
    href: str


class TeamMember(Schema):
    id: str
    name: str
    role: str
    experience: str
    bio: str
    skills: list[str]
    monogram: str


class Post(Schema):
    id: str
    title: str
    excerpt: str
    category: str
    date: str
    readingTime: str
    href: str


class Review(Schema):
    id: str
    quote: str
    author: str
    position: str
    rating: int = Field(ge=1, le=5)
    monogram: str


class FaqItem(Schema):
    id: str
    question: str
    answer: str


class ContactBlock(Schema):
    eyebrow: str
    title: str
    description: str
    benefits: list[str]
    disclaimer: str


class FooterLinkGroup(Schema):
    title: str
    links: list[NavLink]


class FooterContacts(Schema):
    email: str
    phone: str
    address: str


class SiteFooter(Schema):
    description: str
    socials: list[NavLink]
    navigation: FooterLinkGroup
    contacts: FooterContacts
    copyright: str
    legal: list[NavLink]


# ─── «О нас» ──────────────────────────────────────────────────────────


class AboutCardRow(Schema):
    label: str
    value: str


class AboutHeroCard(Schema):
    monogram: str
    name: str
    tagline: str
    rows: list[AboutCardRow]
    status: str


class AboutHero(Schema):
    eyebrow: str
    titleLead: str
    titleAccent: str
    lead: str
    description: str
    cta: NavLink
    card: AboutHeroCard


class AboutStat(Schema):
    value: str
    label: str


class Principle(Schema):
    id: str
    index: str
    title: str
    description: str
    icon: str


class AboutTeamMember(Schema):
    id: str
    initials: str
    name: str
    role: str
    experience: str
    bio: str
    skills: list[str]
    accent: TeamAccent


class AboutTechCta(Schema):
    title: str
    description: str
    cta: NavLink


class AboutPage(Schema):
    hero: AboutHero
    stats: list[AboutStat]
    principlesEyebrow: str
    principlesTitle: str
    principlesDescription: str
    principles: list[Principle]
    teamEyebrow: str
    teamTitle: str
    team: list[AboutTeamMember]
    teamNote: str
    techEyebrow: str
    techTitle: str
    techNote: str
    technologies: list[Technology]
    techCta: AboutTechCta


# ─── «Услуги» ─────────────────────────────────────────────────────────


class ServiceTeaser(Schema):
    id: str
    title: str
    subtitle: str
    accent: BrandAccent


class ServicesHero(Schema):
    eyebrow: str
    titleLead: str
    titleAccent: str
    lead: str
    description: str
    teasers: list[ServiceTeaser]


class ServiceOffer(Schema):
    id: str
    index: str
    title: str
    description: str
    tags: list[str]
    icon: str
    href: str


class ProcessStep(Schema):
    id: str
    index: str
    title: str
    description: str
    icon: str


class ServiceCase(Schema):
    id: str
    name: str
    category: str
    description: str
    metrics: list[str]
    status: str
    pattern: str
    accent: BrandAccent
    href: str


class ServicesCta(Schema):
    eyebrow: str
    titleLead: str
    titleAccent: str
    description: str
    primary: NavLink
    secondary: NavLink


class ServicesPage(Schema):
    hero: ServicesHero
    offersEyebrow: str
    offersTitle: str
    offersDescription: str
    offers: list[ServiceOffer]
    processEyebrow: str
    processTitle: str
    process: list[ProcessStep]
    processNote: str
    casesEyebrow: str
    casesTitle: str
    cases: list[ServiceCase]
    casesLink: NavLink
    faqEyebrow: str
    faqTitle: str
    faqDescription: str
    faqCta: NavLink
    faq: list[FaqItem]
    cta: ServicesCta


# ─── «Проекты» ────────────────────────────────────────────────────────


class ProjectsHero(Schema):
    eyebrow: str
    titleLead: str
    titleAccent: str
    lead: str
    description: str
    stats: list[AboutStat]


class ProjectCategory(Schema):
    id: str
    label: str


class Project(Schema):
    id: str
    name: str
    categoryId: str
    category: str
    description: str
    stack: list[str]
    year: str
    status: str
    inProgress: bool | None = None
    visual: str
    href: str


class ProjectsCta(Schema):
    eyebrow: str
    titleLead: str
    titleAccent: str
    description: str
    benefits: list[str]
    primary: NavLink
    secondary: NavLink


class ProjectsPage(Schema):
    hero: ProjectsHero
    listTitle: str
    categories: list[ProjectCategory]
    projects: list[Project]
    cta: ProjectsCta


# ─── «Блог» ───────────────────────────────────────────────────────────


class BlogHero(Schema):
    eyebrow: str
    titleLead: str
    titleAccent: str
    lead: str
    description: str


class ArticleCategory(Schema):
    id: str
    label: str


class Article(Schema):
    id: str
    title: str
    excerpt: str
    categoryIds: list[str]
    readingTime: str
    date: str
    visual: str
    href: str


class FeaturedArticle(Article):
    badge: str


class SubscribeBlock(Schema):
    eyebrow: str
    titleLead: str
    titleAccent: str
    description: str
    placeholder: str
    submitLabel: str
    disclaimer: str


class BlogPage(Schema):
    hero: BlogHero
    featured: FeaturedArticle
    listEyebrow: str
    categories: list[ArticleCategory]
    articles: list[Article]
    subscribe: SubscribeBlock


# ─── Тело статьи ──────────────────────────────────────────────────────


class LeadBlock(Schema):
    type: Literal["lead"]
    text: str


class ParagraphBlock(Schema):
    type: Literal["paragraph"]
    text: str


class Heading2Block(Schema):
    type: Literal["heading2"]
    text: str


class Heading3Block(Schema):
    type: Literal["heading3"]
    text: str


class ListBlock(Schema):
    type: Literal["list"]
    items: list[str]


class StepItem(Schema):
    title: str
    text: str


class StepsBlock(Schema):
    type: Literal["steps"]
    items: list[StepItem]


class QuoteBlock(Schema):
    type: Literal["quote"]
    text: str
    author: str


class FigureBlock(Schema):
    type: Literal["figure"]
    src: str
    caption: str


class CodeBlock(Schema):
    type: Literal["code"]
    filename: str
    code: str


class StatItem(Schema):
    value: str
    label: str


class StatsBlock(Schema):
    type: Literal["stats"]
    items: list[StatItem]


ArticleBlock = Annotated[
    Union[
        LeadBlock,
        ParagraphBlock,
        Heading2Block,
        Heading3Block,
        ListBlock,
        StepsBlock,
        QuoteBlock,
        FigureBlock,
        CodeBlock,
        StatsBlock,
    ],
    Field(discriminator="type"),
]


class ArticleAuthor(Schema):
    initials: str
    name: str
    role: str
    bio: str
    link: NavLink


class ArticleCover(Schema):
    src: str
    caption: str


class ArticleDetail(Schema):
    slug: str
    title: str
    excerpt: str
    categoryIds: list[str]
    breadcrumb: str
    readingTime: str
    publishedLabel: str
    publishedAt: str
    cover: ArticleCover | None = None
    author: ArticleAuthor
    body: list[ArticleBlock]
    tags: list[str]
    shareLabel: str
    shareTargets: list[str]


# ─── «Контакты» ───────────────────────────────────────────────────────


class ContactChannel(Schema):
    id: str
    icon: ContactIconName
    label: str
    value: str
    note: str
    href: str | None = None


class ContactsHero(Schema):
    eyebrow: str
    titleLead: str
    titleAccent: str
    lead: str
    description: str
    highlights: list[ContactChannel]


class ContactsForm(Schema):
    eyebrow: str
    title: str
    description: str
    channelLabel: str
    channels: list[str]
    submitLabel: str
    note: str


class ContactsMapCard(Schema):
    name: str
    kind: str
    address: str
    note: str
    link: NavLink


class ContactsMap(Schema):
    eyebrow: str
    title: str
    image: str
    card: ContactsMapCard


class RequisiteRow(Schema):
    label: str
    value: str


class ContactsRequisites(Schema):
    eyebrow: str
    title: str
    description: str
    download: NavLink
    rows: list[RequisiteRow]


class SocialLink(Schema):
    code: str
    label: str
    href: str


class ContactsPage(Schema):
    hero: ContactsHero
    channelsEyebrow: str
    channelsTitle: str
    channelsDescription: str
    channels: list[ContactChannel]
    socialsLabel: str
    socials: list[SocialLink]
    form: ContactsForm
    map: ContactsMap
    requisites: ContactsRequisites


# ─── Формы ────────────────────────────────────────────────────────────


class LeadInput(Schema):
    name: str = Field(min_length=1, max_length=200)
    contact: str = Field(min_length=1, max_length=200)
    message: str = Field(default="", max_length=5000)


class SubscribeInput(Schema):
    email: str = Field(min_length=3, max_length=320)


class LeadResult(Schema):
    """Ответ форм. Отдаётся со статусом 200 и при ошибке валидации тоже."""

    ok: bool
    message: str
