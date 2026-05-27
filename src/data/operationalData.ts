export type OperationalPhaseId = 'foundation' | 'standards' | 'systems' | 'growth'

export interface OperationalPhase {
  id: OperationalPhaseId
  number: string
  title: string
  description: string
}

export interface OperationalProcess {
  id: string
  title: string
  description: string
  impact: string
  phaseId: OperationalPhaseId
}

export const operationalPhases: OperationalPhase[] = [
  {
    id: 'foundation',
    number: '01',
    title: 'Фундамент операций',
    description: 'Ежедневный контроль, графики, санитарные нормы и выполнение планов.',
  },
  {
    id: 'standards',
    number: '02',
    title: 'Стандарты сервиса',
    description: 'Единые правила общения, обучение персонала и контроль качества.',
  },
  {
    id: 'systems',
    number: '03',
    title: 'Системы и CRM',
    description: 'Цифровой контроль, отчётность, задачи и инфраструктура клиники.',
  },
  {
    id: 'growth',
    number: '04',
    title: 'Рост и удержание',
    description: 'Лояльность, call center, рефералы и аналитика отказов.',
  },
]

export const operationalProcesses: OperationalProcess[] = [
  {
    id: '1',
    title: 'Ежедневная работа клиники',
    description: 'Структурированный операционный день с чёткими зонами ответственности.',
    impact: 'Стабильность процессов',
    phaseId: 'foundation',
  },
  {
    id: '2',
    title: 'Контроль графика врачей',
    description: 'Прозрачное планирование приёма и загрузки специалистов.',
    impact: 'Оптимизация расписания',
    phaseId: 'foundation',
  },
  {
    id: '3',
    title: 'Создание графика врачей',
    description: 'Системное формирование смен с учётом спроса и специализации.',
    impact: 'Планируемая загрузка',
    phaseId: 'foundation',
  },
  {
    id: '4',
    title: 'Контроль персонала',
    description: 'Мониторинг админов, врачей и исполнения стандартов.',
    impact: 'Дисциплина команды',
    phaseId: 'foundation',
  },
  {
    id: '5',
    title: 'Санитарные нормы',
    description: 'Регулярные проверки чистоты и соответствия медицинским требованиям.',
    impact: 'Медицинская безопасность',
    phaseId: 'foundation',
  },
  {
    id: '6',
    title: 'Контроль планов',
    description: 'Отслеживание KPI отделов и индивидуальных целей.',
    impact: 'Исполнение стратегии',
    phaseId: 'foundation',
  },
  {
    id: '7',
    title: 'Стандарты сервиса',
    description: 'Единые критерии качества на каждом этапе пациентского пути.',
    impact: 'Качество сервиса',
    phaseId: 'standards',
  },
  {
    id: '8',
    title: 'Стандарт общения',
    description: 'Скрипты и тон коммуникации для всех точек контакта.',
    impact: 'Доверие пациентов',
    phaseId: 'standards',
  },
  {
    id: '9',
    title: 'Обучение сотрудников',
    description: 'Адаптация, onboarding и регулярные тренинги.',
    impact: 'Сильная команда',
    phaseId: 'standards',
  },
  {
    id: '10',
    title: 'Форма персонала',
    description: 'Единый визуальный стандарт для врачей и администраторов.',
    impact: 'Имидж клиники',
    phaseId: 'standards',
  },
  {
    id: '11',
    title: 'Бейджики',
    description: 'Идентификация сотрудников для доверия и сервиса.',
    impact: 'Профессиональный вид',
    phaseId: 'standards',
  },
  {
    id: '12',
    title: 'Распределение задач',
    description: 'Прозрачная система ответственности между сотрудниками.',
    impact: 'Исполнение без хаоса',
    phaseId: 'standards',
  },
  {
    id: '13',
    title: 'Внедрение CRM',
    description: 'Централизованный учёт пациентов, воронки и аналитики.',
    impact: 'Контроль статистики',
    phaseId: 'systems',
  },
  {
    id: '14',
    title: 'Парковка для пациентов',
    description: 'Два выделенных места для комфорта и лояльности.',
    impact: 'Премиальный сервис',
    phaseId: 'systems',
  },
  {
    id: '15',
    title: 'Система отчётности',
    description: 'Регулярные отчёты для руководства по всем направлениям.',
    impact: 'Прозрачность цифр',
    phaseId: 'systems',
  },
  {
    id: '16',
    title: 'Спецпредложения',
    description: 'Программы для постоянных клиентов и удержания.',
    impact: 'Рост LTV',
    phaseId: 'growth',
  },
  {
    id: '17',
    title: 'Бонусы сотрудникам',
    description: 'Мотивация команды за качество и результат.',
    impact: 'Вовлечённость',
    phaseId: 'growth',
  },
  {
    id: '18',
    title: 'Call center',
    description: 'Централизованная обработка обращений и записей.',
    impact: 'Конверсия звонков',
    phaseId: 'growth',
  },
  {
    id: '19',
    title: 'Сайт задач',
    description: 'Приоритеты, дедлайны и контроль исполнения онлайн.',
    impact: 'Цифровое управление',
    phaseId: 'systems',
  },
  {
    id: '20',
    title: '«Приведи друга»',
    description: 'Реферальная программа для органического роста.',
    impact: 'Новые пациенты',
    phaseId: 'growth',
  },
  {
    id: '21',
    title: 'Анализ отказов',
    description: 'Разбор причин после консультации для улучшения конверсии.',
    impact: 'Рост конверсии',
    phaseId: 'growth',
  },
  {
    id: '22',
    title: 'Тестирование идей',
    description: 'Регулярные эксперименты с измерением результата.',
    impact: 'Инновации',
    phaseId: 'growth',
  },
]
