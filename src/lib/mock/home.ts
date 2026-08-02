import type {
  Client,
  ContactBlock,
  FaqItem,
  Hero,
  NavLink,
  Post,
  PortfolioCase,
  Review,
  Service,
  SiteFooter,
  TeamMember,
  Technology,
} from "@/lib/types";

/**
 * Мок-данные главной страницы. Тексты и цифры взяты из макета Figma.
 * Когда появится FastAPI, эти константы заменяются ответами API —
 * контракты описаны в `@/lib/types`.
 */

// Якоря пишем от корня: ссылки живут и в шапке страницы «О нас».
export const navigation: NavLink[] = [
  { label: "Услуги", href: "/#services" },
  { label: "Блог", href: "/#blog" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/#contact" },
];

export const hero: Hero = {
  badge: "IT-студия полного цикла",
  titleLead: "Цифровые решения, что ",
  titleAccent: "приносят прибыль",
  description:
    "Разрабатываем веб-платформы, мобильные приложения и сложные интеграции для бизнеса, которому важен результат.",
  primaryCta: { label: "Обсудить проект", href: "#contact" },
  secondaryCta: { label: "Смотреть кейсы", href: "#portfolio" },
  stats: [
    { value: "12+", label: "лет на рынке" },
    { value: "200+", label: "проектов" },
    { value: "95%", label: "клиентов возвращаются" },
  ],
  dashboard: {
    domain: "dashboard.kts.studio",
    metrics: [
      { value: "340K", label: "Заказов/мес", delta: "+18%" },
      { value: "99.98%", label: "Uptime", delta: "↑ SLA" },
      { value: "120ms", label: "API p95", delta: "−34ms" },
    ],
    trafficTitle: "Трафик за 7 дней",
    trafficDelta: "+22%",
    traffic: [
      { day: "Пн", value: 0.4 },
      { day: "Вт", value: 0.65 },
      { day: "Ср", value: 0.5 },
      { day: "Чт", value: 0.8 },
      { day: "Пт", value: 0.7 },
      { day: "Сб", value: 0.9, highlighted: true },
      { day: "Вс", value: 0.75 },
    ],
    eventsTitle: "Последние события",
    events: [
      { title: "Deploy v2.4.1", time: "2 мин назад", accent: true },
      { title: "Новый клиент: ООО «Логистик»", time: "14 мин назад" },
      { title: "Alert: CPU spike 87%", time: "31 мин назад" },
    ],
  },
};

export const clients: Client[] = [
  { id: "probank", name: "ПроБанк", industry: "Финтех / банкинг", monogram: "П" },
  { id: "megamarket", name: "МегаМаркет", industry: "E-commerce", monogram: "М" },
  { id: "logitrack", name: "LogiTrack", industry: "Логистика", monogram: "L" },
  { id: "medpoint", name: "MedPoint", industry: "Здравоохранение", monogram: "M" },
  { id: "eduspace", name: "EduSpace", industry: "EdTech", monogram: "E" },
  { id: "autopilot", name: "AutoPilot", industry: "Авторынок", monogram: "A" },
];

export const technologies: Technology[] = [
  { id: "python", name: "Python", icon: "/tech/python.svg" },
  { id: "django", name: "Django", icon: "/tech/django.svg" },
  { id: "nextjs", name: "Next.js", icon: "/tech/nextjs.svg" },
  { id: "react", name: "React", icon: "/tech/react.svg" },
  { id: "fastapi", name: "FastAPI", icon: "/tech/fastapi.svg" },
  { id: "bitrix", name: "1С-Битрикс", icon: "/tech/bitrix.svg" },
  { id: "postgresql", name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  { id: "docker", name: "Docker", icon: "/tech/docker.svg" },
];

export const services: Service[] = [
  {
    id: "web",
    title: "Веб-платформы",
    description:
      "Высоконагруженные маркетплейсы, корпоративные порталы и SaaS-продукты с нуля — от архитектуры до CI/CD.",
    icon: "/services/web.svg",
    features: ["Next.js / React", "Django / FastAPI", "PostgreSQL", "Kubernetes"],
    href: "#contact",
  },
  {
    id: "mobile",
    title: "Мобильные приложения",
    description:
      "iOS и Android с нативным UX, интеграцией с бэкендом и поддержкой всего жизненного цикла продукта.",
    icon: "/services/mobile.svg",
    features: ["React Native", "Swift / Kotlin", "Push-уведомления", "App Store + GP"],
    href: "#contact",
  },
  {
    id: "integrations",
    title: "Интеграции и автоматизация",
    description:
      "CRM, ERP, 1С, платёжные системы — выстраиваем цифровую инфраструктуру, работающую как единый организм.",
    icon: "/services/integration.svg",
    features: ["REST / GraphQL API", "1С-Битрикс", "Stripe / ЮКасса", "Webhook-оркестрация"],
    href: "#contact",
  },
];

export const portfolio: PortfolioCase[] = [
  {
    id: "megamarket",
    title: "Платформа онлайн-торговли «МегаМаркет»",
    category: "E-commerce / Маркетплейс",
    status: "Работает",
    description:
      "Высоконагруженный маркетплейс с 2 млн+ SKU, real-time аналитикой продаж, собственной системой рекомендаций и интеграцией с 14 платёжными провайдерами.",
    metrics: ["2 млн+ SKU", "340 тыс. заказов/мес", "99.98% uptime"],
    stack: ["Django", "React", "PostgreSQL", "Redis"],
    href: "#contact",
  },
  {
    id: "probank",
    title: "Личный кабинет клиента «ПроБанк»",
    category: "FinTech / Банкинг",
    status: "Работает",
    description:
      "Цифровой банкинг с биометрической авторизацией, P2P-переводами, управлением картами и инвестиционным портфелем. 800 тыс. активных пользователей.",
    metrics: ["800 тыс. пользователей", "< 120 мс отклик API", "PCI DSS Level 1"],
    stack: ["FastAPI", "Next.js", "Docker", "PostgreSQL"],
    href: "#contact",
  },
];

export const team: TeamMember[] = [
  {
    id: "gromov",
    name: "Алексей Громов",
    role: "CEO & Co-founder",
    experience: "Опыт: 10+ лет",
    bio: "Техническое образование МГТУ, прошёл путь от разработчика до управляющего партнёра. Закрывает архитектурные решения лично.",
    skills: ["Стратегия", "Архитектура", "Переговоры"],
    monogram: "А",
  },
  {
    id: "semenova",
    name: "Мария Семёнова",
    role: "CTO",
    experience: "Опыт: 8 лет",
    bio: "Специализация — высоконагруженные системы. До KTS — tech lead в финтех-стартапе с 5 млн пользователей.",
    skills: ["Python", "Go", "Kubernetes"],
    monogram: "М",
  },
  {
    id: "kim",
    name: "Дмитрий Ким",
    role: "Lead Architect",
    experience: "Опыт: 12+ лет",
    bio: "Привлекается для сложных интеграций и нестандартной архитектуры. Экс-Яндекс, экс-Сбер.",
    skills: ["DDD", "Event Sourcing", "Microservices"],
    monogram: "Д",
  },
];

export const posts: Post[] = [
  {
    id: "stack-2026",
    title: "Как выбрать стек технологий для стартапа в 2026",
    excerpt:
      "Разбираем, когда Next.js + FastAPI — оптимальный выбор, а когда монолит на Django спасёт вас от overengineering.",
    category: "Архитектура",
    date: "Свежее",
    readingTime: "8 мин чтения",
    href: "#blog",
  },
  {
    id: "bitrix-2026",
    title: "Почему 1С-Битрикс всё ещё актуален в 2026",
    excerpt:
      "Несмотря на хайп вокруг headless CMS, Битрикс остаётся прагматичным выбором для ритейла и корпоративных порталов.",
    category: "1С-Битрикс",
    date: "3 июня 2026",
    readingTime: "6 мин чтения",
    href: "#blog",
  },
  {
    id: "payments-checklist",
    title: "Интеграция с платёжными системами: полный чек-лист",
    excerpt:
      "От выбора провайдера до обработки edge cases — всё, что нужно учесть, чтобы деньги не пропадали в никуда.",
    category: "Интеграции",
    date: "27 мая 2026",
    readingTime: "11 мин чтения",
    href: "#blog",
  },
];

export const reviews: Review[] = [
  {
    id: "petrov",
    quote:
      "KTS Studio полностью перестроила нашу e-commerce платформу за 4 месяца. Конверсия выросла на 34%, нагрузка держится без сбоев. Редкое сочетание технической зрелости и бизнес-понимания.",
    author: "Алексей Петров",
    position: "CEO, RetailGroup",
    rating: 5,
    monogram: "А",
  },
  {
    id: "orlova",
    quote:
      "Команда вошла в проект, разобралась в легаси за неделю и уже через месяц мы видели первые результаты. Никакой воды — только чистый инженерный подход.",
    author: "Светлана Орлова",
    position: "CPO, ПроБанк",
    rating: 5,
    monogram: "С",
  },
];

export const faq: FaqItem[] = [
  {
    id: "start",
    question: "Как выглядит процесс старта проекта?",
    answer:
      "Первая встреча — 30 минут: разбираем задачу, ограничения и сроки. Дальше готовим предварительную оценку и план работ, согласуем скоуп первого этапа и подписываем договор. К разработке приступаем в течение недели.",
  },
  {
    id: "budget",
    question: "Какой минимальный бюджет для сотрудничества?",
    answer:
      "Мы берёмся за проекты от 800 тыс. ₽. Небольшие доработки и аудиты обсуждаем отдельно — если задача не наша, честно скажем об этом на первом созвоне.",
  },
  {
    id: "documents",
    question: "Вы работаете по договору и с закрывающими документами?",
    answer:
      "Да. Работаем по договору с приложением ТЗ, предоставляем акты и счета-фактуры. Возможна работа как с ООО, так и с ИП, включая НДС.",
  },
  {
    id: "support",
    question: "Поддерживаете проект после запуска?",
    answer:
      "Да, предлагаем SLA-поддержку с фиксированным временем реакции, мониторингом и регулярными релизами. Либо передаём проект вашей команде с полной документацией.",
  },
  {
    id: "audit",
    question: "Можно ли привлечь вашего архитектора для аудита?",
    answer:
      "Да, это отдельная услуга: 2–3 недели на аудит кода, инфраструктуры и процессов, на выходе — отчёт с приоритизированным планом изменений.",
  },
];

export const contact: ContactBlock = {
  eyebrow: "Начать проект",
  title: "Оставьте заявку",
  description:
    "Опишите задачу — мы свяжемся в течение рабочего дня, проведём бесплатную стратегическую сессию и предложим решение.",
  benefits: [
    "Ответим за 1 рабочий день",
    "Бесплатная первичная консультация",
    "Честная оценка бюджета",
  ],
  disclaimer: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности",
};

export const footer: SiteFooter = {
  description:
    "IT-студия полного цикла. Создаём продукты, которые решают бизнес-задачи и масштабируются вместе с вашим бизнесом.",
  socials: [
    { label: "TG", href: "#" },
    { label: "VC", href: "#" },
    { label: "HH", href: "#" },
  ],
  navigation: {
    title: "Навигация",
    links: navigation,
  },
  contacts: {
    email: "hello@kts.studio",
    phone: "+7 (495) 123-45-67",
    address: "Москва, Варшавское шоссе, 1с1",
  },
  copyright: "© 2026 KTS Studio. Все права защищены.",
  legal: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Договор оферты", href: "#" },
  ],
};
