import TaskItem from './TaskItem';

export default function TaskList({
  tasks,
  onStatusChange,
  onRemove,
  emptyMessage = 'Nenhuma tarefa ainda. Adicione a primeira!',
}) {
  if (tasks.length === 0) {
    return <p className="empty">{emptyMessage}</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
