import { routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'
import TasksCell from 'src/components/Projects/Task/TasksCell'

const TasksPage = () => {
  return (
    <>
      <PageTitle
        title="Your Tasks"
        breadcrumbs={[{ title: 'Projects', to: routes.projects() }]}
        currentCrumbLabel="Tasks"
        search={{ label: 'tasks', type: 'task' }}
      />

      <TasksCell />
    </>
  )
}

export default TasksPage
