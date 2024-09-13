import { api } from '../lib/api'

export type CreateGoalRequest = {
  title: string
  desiredWeeklyFrequency: number
}
export type CreateGoalResponse = {
  goal: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    createdAt: string
  }
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  const response = await api.post<CreateGoalResponse>('/goals', {
    title,
    desiredWeeklyFrequency,
  })
  return response.data
}
