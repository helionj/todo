import { STATUS_LIST, STATUS_LABEL, STATUS_COLOR } from '../utils/status';

export default function TaskItem({ task, onStatusChange, onRemove }) {
  return (
    <li className="task-item" style={{ borderLeftColor: STATUS_COLOR[task.status] }}>
      <span className="task-title">{task.title}</span>
      <div className="task-actions">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
        >
          {STATUS_LIST.map((s) => (
            <option key={s} value={s}>
              {STATUS_LABEL[s]}
            </option>
          ))}
        </select>
        <button type="button" onClick={() => onRemove(task.id)} aria-label="Excluir">
          ✕
        </button>
      </div>
    </li>
  );
}
