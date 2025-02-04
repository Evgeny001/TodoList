import './App.css'
import { TodolistItem } from './TodolistItem/ui/TodolistItem.tsx'

export type Task = {
  id: number
  title: string
  isDone: boolean
}

export const App = () => {
  const tasks1: Task[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ]

  const tasks2: Task[] = []

  return (
    <div className="app">
      <TodolistItem title="What to learn" tasks={tasks1} />
      <TodolistItem title="Songs" tasks={tasks2} />
    </div>
  )
}
