import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';
import StatusChart from './components/StatusChart';
import ProgressChart from './components/ProgressChart';
import { useTasks } from './hooks/useTasks';
import { useTaskSearch } from './hooks/useTaskSearch';
import './App.css';

export default function App() {
  const { tasks, addTask, updateStatus, removeTask } = useTasks();
  const { query, setQuery, filter, setFilter, filteredTasks } = useTaskSearch(tasks);
  const hasTasks = tasks.length > 0;
  const emptyMessage = hasTasks
    ? 'Nenhuma tarefa encontrada para a busca.'
    : 'Nenhuma tarefa ainda. Adicione a primeira!';

  return (
    <div className="app">
      <header className="app-header">
        <h1>📋 Todo App</h1>
        <p>Gerencie suas tarefas e acompanhe o progresso em gráficos.</p>
      </header>

      <main className="app-main">
        <section className="panel">
          <h2>Tarefas</h2>
          <TaskForm onAdd={addTask} />
          <TaskSearch
            query={query}
            onQueryChange={setQuery}
            filter={filter}
            onFilterChange={setFilter}
          />
          <TaskList
            tasks={filteredTasks}
            onStatusChange={updateStatus}
            onRemove={removeTask}
            emptyMessage={emptyMessage}
          />
        </section>

        <section className="panel dashboard">
          <h2>Dashboard</h2>
          <div className="charts">
            <StatusChart tasks={tasks} />
            <ProgressChart tasks={tasks} />
          </div>
        </section>
      </main>
    </div>
  );
}
