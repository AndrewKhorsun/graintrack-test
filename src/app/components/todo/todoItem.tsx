interface Props {
  todoId: string;
}

export function ToDoItem(props: Props) {
  const { todoId } = props;
  return (
    <div>
      <div>ITEM TODO {todoId}</div>
    </div>
  );
}
