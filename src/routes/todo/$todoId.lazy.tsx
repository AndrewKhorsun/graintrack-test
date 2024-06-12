import { createLazyFileRoute } from '@tanstack/react-router'
import { ToDoItem } from '../../app/components/todo/todoItem'

export const Route = createLazyFileRoute('/todo/$todoId')({
  component: ToDoItemHandler
})

function ToDoItemHandler() {
const { todoId } = Route.useParams()

  return <ToDoItem todoId={todoId}/>
}