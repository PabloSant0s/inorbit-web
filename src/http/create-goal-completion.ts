import { api } from '../lib/api'

export type CreateGoalCompletionResponse = {
  goalCompletion: {
    id: string
    createdAt: string
    goalId: string
  }
}

export async function createGoalCompletion(goalId: string) {
  const response = await api.post<CreateGoalCompletionResponse>('/completion', {
    goalId,
  })
  return response.data
}
