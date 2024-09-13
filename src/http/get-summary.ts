import { api } from '../lib/api'

type GetSummaryResponse = {
  summary: {
    completed: number
    total: number
    goalsPerDay: Record<
      string,
      {
        id: string
        title: string
        completedAt: string
      }[]
    >
  }
}
export async function getSummary() {
  const response = await api.get<GetSummaryResponse>('/summary')
  return response.data
}
