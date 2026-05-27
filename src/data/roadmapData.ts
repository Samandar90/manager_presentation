export type Priority = 'critical' | 'high' | 'medium'

export interface RoadmapMilestone {
  id: string
  title: string
  done?: boolean
}

export interface RoadmapWeek {
  id: string
  week: number
  title: string
  subtitle: string
  progress: number
  priority: Priority
  milestones: RoadmapMilestone[]
}

export const roadmapWeeks: RoadmapWeek[] = [
  {
    id: 'week-1',
    week: 1,
    title: 'Неделя 1',
    subtitle: 'Фундамент управления',
    progress: 25,
    priority: 'critical',
    milestones: [
      { id: '1', title: 'Внедрение CRM', done: true },
      { id: '2', title: 'График сотрудников' },
      { id: '3', title: 'Форма персонала' },
      { id: '4', title: 'Санитарные нормы' },
      { id: '5', title: 'Бейджики' },
    ],
  },
  {
    id: 'week-2',
    week: 2,
    title: 'Неделя 2',
    subtitle: 'Среда и цифровизация',
    progress: 50,
    priority: 'high',
    milestones: [
      { id: '1', title: 'Постеры в коридорах и кабинетах' },
      { id: '2', title: 'Парковка для пациентов' },
      { id: '3', title: 'Маршрутизация пути пациента' },
      { id: '4', title: 'AI для мед. терминов и документов' },
      { id: '5', title: 'Удержание через CRM' },
    ],
  },
  {
    id: 'week-3',
    week: 3,
    title: 'Неделя 3',
    subtitle: 'Операции и договорённости',
    progress: 75,
    priority: 'high',
    milestones: [
      { id: '1', title: 'Порядок на ресепшн' },
      { id: '2', title: 'Договор врачей и клиники' },
      { id: '3', title: 'Подставка для ключей' },
    ],
  },
  {
    id: 'week-4',
    week: 4,
    title: 'Неделя 4',
    subtitle: 'Комфорт команды и финализация',
    progress: 100,
    priority: 'medium',
    milestones: [
      { id: '1', title: 'Обед сотрудникам' },
      { id: '2', title: 'Жалюзи и финальная среда' },
      { id: '3', title: 'Проверка всех систем' },
    ],
  },
]

export const priorityLabels: Record<Priority, string> = {
  critical: 'Критический',
  high: 'Высокий',
  medium: 'Средний',
}
