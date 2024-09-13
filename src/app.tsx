import { useQuery } from '@tanstack/react-query'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryFn: getSummary,
    queryKey: ['summary'],
    staleTime: 1000 * 60,
  })

  return (
    <Dialog>
      {data?.summary.total ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
