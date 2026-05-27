import type { LucideIcon } from 'lucide-react'
import { Heart, Megaphone, Settings2, Zap } from 'lucide-react'

export type SectionId =
  | 'hero'
  | 'overview'
  | 'team'
  | 'departments'
  | 'advertising'
  | 'internal'
  | 'finance'
  | 'first-steps'
  | 'it'
  | 'bloggers'
  | 'opening'
  | 'final'

export interface StoryStep {
  id: string
  label: string
  title: string
  hint: string
}

export interface NavItem {
  id: SectionId
  label: string
  href: string
}

export interface KpiCard {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface TeamMemberCard {
  id: string
  title: string
  description: string
  tag?: string
  scrollToIt?: boolean
}

export interface DepartmentCard {
  id: string
  title: string
  items: { label: string; value: string }[]
}

export type AdFilter = 'all' | 'online' | 'offline' | 'loyalty' | 'reviews'

export interface AdCard {
  id: string
  title: string
  category: Exclude<AdFilter, 'all'>
}

export interface FinanceItem {
  id: string
  title: string
  description: string
}

export interface OpeningItem {
  id: string
  text: string
}

export const siteMeta = {
  clinicName: "Kamilovs' Clinic",
  presentationYear: '2026',
  statusLabel: 'Management Presentation / 2026',
}

export const heroContent = {
  title: 'Стратегия развития Kamilovs’ Clinic',
  subtitle:
    'План системного управления, маркетинга, сервиса, IT-автоматизации и роста клиники после вступления в должность менеджера.',
  primaryCta: 'Смотреть план',
  secondaryCta: 'IT и автоматизация',
  dashboardItems: [
    'Маркетинг',
    'Сервис',
    'CRM',
    'Контроль качества',
    'Рост клиники',
  ],
}

export const navItems: NavItem[] = [
  { id: 'overview', label: 'Обзор', href: '#overview' },
  { id: 'team', label: 'Команда', href: '#team' },
  { id: 'advertising', label: 'Реклама', href: '#advertising' },
  { id: 'bloggers', label: 'Блогеры', href: '#bloggers' },
  { id: 'internal', label: 'Операции', href: '#internal' },
  { id: 'finance', label: 'Финансы', href: '#finance' },
  { id: 'first-steps', label: 'Первые шаги', href: '#first-steps' },
  { id: 'it', label: 'IT', href: '#it' },
  { id: 'opening', label: 'Открытие', href: '#opening' },
]

export const overviewContent = {
  goalTitle: 'Главная цель',
  goalText:
    'Создать управляемую систему, где каждый отдел, сотрудник, рекламный канал и пациентский путь находятся под контролем, измеряются через CRM и работают на рост доверия, качества сервиса и прибыли клиники.',
}

export const overviewStorySteps: StoryStep[] = [
  {
    id: 'problem',
    label: 'Проблема',
    title: 'Хаос процессов',
    hint: 'Нет единой системы контроля и прозрачной аналитики.',
  },
  {
    id: 'solution',
    label: 'Решение',
    title: 'Менеджмент + CRM',
    hint: 'Централизованное управление всеми направлениями клиники.',
  },
  {
    id: 'system',
    label: 'Система',
    title: 'Операционная модель',
    hint: 'Стандарты, команда, IT и маркетинг в одной структуре.',
  },
  {
    id: 'result',
    label: 'Результат',
    title: 'Рост и прибыль',
    hint: 'Измеримый сервис, доверие пациентов и цифры для руководства.',
  },
]

export const sectionNumbers: Partial<Record<SectionId, string>> = {
  overview: '01',
  team: '02',
  departments: '03',
  advertising: '04',
  bloggers: '05',
  internal: '06',
  finance: '07',
  'first-steps': '08',
  it: '09',
  opening: '10',
  final: '11',
}

export const kpiCards: KpiCard[] = [
  {
    id: 'service',
    title: 'Сервис',
    description: 'Единые стандарты общения, контроль качества и пациентский опыт на каждом этапе.',
    icon: Heart,
  },
  {
    id: 'system',
    title: 'Системность',
    description: 'Прозрачные процессы, отчётность и управляемая операционная модель клиники.',
    icon: Settings2,
  },
  {
    id: 'marketing',
    title: 'Маркетинг',
    description: 'Команда, каналы и измеримый рост узнаваемости и потока пациентов.',
    icon: Megaphone,
  },
  {
    id: 'automation',
    title: 'Автоматизация',
    description: 'CRM, IT-инструменты и цифровая инфраструктура для контроля и аналитики.',
    icon: Zap,
  },
]

export const marketingTeam: TeamMemberCard[] = [
  {
    id: 'smm',
    title: 'SMM специалист',
    description: 'Контент, соцсети, вовлечение аудитории и регулярная коммуникация с пациентами.',
    tag: 'Маркетинг',
  },
  {
    id: 'graphic',
    title: 'Графический дизайнер',
    description: 'Визуальная айдентика, печатные материалы, постеры и премиальный визуал клиники.',
    tag: 'Маркетинг',
  },
  {
    id: 'motion',
    title: 'Motion дизайнер',
    description: 'Анимация и видеоконтент для разовых кампаний, рекламы и презентаций.',
    tag: 'Проектно',
  },
  {
    id: 'brand-face',
    title: 'Brand Face',
    description: 'Лицо бренда клиники в контенте, stories и публичных коммуникациях.',
    tag: 'Маркетинг',
  },
  {
    id: 'it-specialist',
    title: 'IT-специалист',
    description: 'Реализация цифровых решений: CRM, автоматизация, сайт и внутренние системы.',
    tag: 'IT',
    scrollToIt: true,
  },
]

export const departments: DepartmentCard[] = [
  {
    id: 'hr',
    title: 'HR отдел',
    items: [
      { label: 'Набор врачей', value: 'Хайдар Позилович' },
      { label: 'Набор остальных сотрудников', value: 'Менеджер' },
    ],
  },
  {
    id: 'quality',
    title: 'Отдел контроля качества',
    items: [{ label: 'Ответственный', value: 'Менеджер' }],
  },
]

export const adFilters: { id: AdFilter; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'online', label: 'Онлайн' },
  { id: 'offline', label: 'Офлайн' },
  { id: 'loyalty', label: 'Лояльность' },
  { id: 'reviews', label: 'Отзывы' },
]

export const advertisingCards: AdCard[] = [
  { id: 'target', title: 'Бюджет на таргетированную рекламу', category: 'online' },
  { id: 'billboards', title: 'Билборды', category: 'offline' },
  { id: 'flyers', title: 'Раздача листовок', category: 'offline' },
  { id: 'led', title: 'LED экран', category: 'offline' },
  { id: 'signs', title: 'Вывески на улицах', category: 'offline' },
  {
    id: 'ig-discount',
    title: 'Скидка за отзыв в Instagram с отметкой клиники',
    category: 'reviews',
  },
  { id: 'patient-feedback', title: 'Фидбек от каждого пациента', category: 'reviews' },
  { id: 'reviews-work', title: 'Работа над отзывами', category: 'reviews' },
  { id: 'video-bonus', title: 'Видео с бонусом 1+1', category: 'online' },
  { id: 'packages', title: 'Пакеты услуг / чек-апы', category: 'loyalty' },
  { id: 'bonus-tickets', title: 'Бонусные талоны', category: 'loyalty' },
  { id: 'bloggers', title: 'Привлечение блогеров', category: 'online' },
  { id: 'unique-offers', title: 'Уникальные предложения пациентам', category: 'loyalty' },
  { id: 'gift-certs', title: 'Подарочные сертификаты', category: 'loyalty' },
]

export const internalChangesTitle = 'Операционная система клиники'

export const financeContent = {
  title: 'Финансовая сторона',
  subtitle: 'Планирование, контроль и прозрачная отчётность по всем направлениям расходов.',
  flowSteps: ['Бюджет', 'Контроль', 'Отчетность', 'Результат'],
}

export const financeItems: FinanceItem[] = [
  {
    id: 'salaries',
    title: 'Зарплаты маркетинг-команды',
    description: 'Фиксированный фонд оплаты SMM, дизайнеров, Brand Face и IT-специалиста.',
  },
  {
    id: 'ads',
    title: 'Рекламные бюджеты',
    description: 'Таргет, офлайн-каналы, блогеры и промо-кампании с ежемесячным лимитом.',
  },
  {
    id: 'household',
    title: 'Бюджет на хозяйственные вещи',
    description: 'Материалы, оборудование, парковка, бейджики и операционные нужды клиники.',
  },
]

export const firstStepsContent = {
  title: 'Первые 30 дней',
  subtitle: 'Первые действия после вступления в должность менеджера клиники.',
}

export const openingContent = {
  title: 'Официальное открытие клиники',
  text: 'После системной подготовки, настройки процессов, команды, маркетинга, CRM и сервиса клиника будет готова к сильному официальному открытию.',
}

export const openingItems: OpeningItem[] = [
  { id: '1', text: 'Подготовка команды' },
  { id: '2', text: 'Подготовка визуала' },
  { id: '3', text: 'Реклама открытия' },
  { id: '4', text: 'Контент для Instagram' },
  { id: '5', text: 'Блогеры' },
  { id: '6', text: 'Спецпредложения' },
  { id: '7', text: 'Контроль качества первого потока пациентов' },
]

export const finalContent = {
  title: 'Моя задача как менеджера',
  text: 'Не просто контролировать клинику, а построить систему, где каждый процесс понятен, каждый сотрудник знает свою задачу, каждый пациент получает качественный сервис, а руководство видит реальные цифры и результат.',
  cta: 'Перейти к началу',
}

export const sectionHeaders = {
  overview: { label: 'Обзор', title: 'Стратегический фокус' },
  team: { label: 'Команда', title: 'Маркетинг-команда' },
  departments: { label: 'Структура', title: 'Отделы' },
  advertising: { label: 'Рост', title: 'Реклама и рост' },
  internal: { label: 'Операции', title: internalChangesTitle },
  finance: { label: 'Финансы', title: financeContent.title },
  firstSteps: { label: 'Старт', title: firstStepsContent.title },
  it: { label: 'IT', title: 'Что предстоит сделать IT-специалисту' },
  bloggers: { label: 'Аналитика', title: 'Блогеры и рекламные интеграции' },
  opening: { label: 'Финал', title: openingContent.title },
}

export const progressSections: { id: SectionId; label: string }[] = [
  { id: 'overview', label: 'Обзор' },
  { id: 'team', label: 'Команда' },
  { id: 'advertising', label: 'Реклама' },
  { id: 'bloggers', label: 'Блогеры' },
  { id: 'internal', label: 'Операции' },
  { id: 'finance', label: 'Финансы' },
  { id: 'first-steps', label: '30 дней' },
  { id: 'it', label: 'IT' },
  { id: 'opening', label: 'Открытие' },
  { id: 'final', label: 'Итог' },
]

export const footerContent = {
  title: 'Management Strategy Presentation',
  clinic: siteMeta.clinicName,
  year: siteMeta.presentationYear,
  preparedFor: 'Prepared for clinic leadership',
}
