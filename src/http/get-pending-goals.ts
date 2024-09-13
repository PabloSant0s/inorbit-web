import { api } from '../lib/api'

export type GetPendingGoalsResponse = {
  pendingGoals: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
}

export async function getPendingGoals() {
  const response = await api.get<GetPendingGoalsResponse>('/pending-goals')
  return response.data
}
