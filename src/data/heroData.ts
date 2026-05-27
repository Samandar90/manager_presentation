import type { LucideIcon } from 'lucide-react'
import { BarChart3, Heart, Users, Workflow } from 'lucide-react'

export interface DashboardMetric {
  id: string
  label: string
  value: number
  suffix?: string
  trend?: string
  icon: LucideIcon
}

export interface DashboardModule {
  id: string
  label: string
  status: 'active' | 'planned' | 'progress'
  progress?: number
}

export const heroDashboardMetrics: DashboardMetric[] = [
  { id: 'kpi', label: 'KPI клиники', value: 94, suffix: '%', trend: '+12%', icon: BarChart3 },
  { id: 'crm', label: 'CRM', value: 100, suffix: '%', trend: 'Внедрение', icon: Workflow },
  { id: 'patients', label: 'Пациенты', value: 1280, suffix: '+', trend: 'мес.', icon: Users },
  { id: 'service', label: 'Сервис', value: 4.9, suffix: '', trend: 'рейтинг', icon: Heart },
]

export const heroDashboardModules: DashboardModule[] = [
  { id: 'marketing', label: 'Маркетинг', status: 'progress', progress: 72 },
  { id: 'service', label: 'Сервис', status: 'active', progress: 88 },
  { id: 'crm', label: 'CRM', status: 'planned', progress: 45 },
  { id: 'analytics', label: 'Аналитика', status: 'active', progress: 91 },
  { id: 'qc', label: 'Контроль качества', status: 'progress', progress: 80 },
]

export const heroFloatingCards = [
  { id: 'live', label: 'Live-контроль', value: '24/7' },
  { id: 'tasks', label: 'Задачи сегодня', value: '18' },
]
