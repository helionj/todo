import { SEARCH_FILTER_LIST, SEARCH_FILTER_LABEL } from '../utils/search';

export default function TaskSearch({ query, onQueryChange, filter, onFilterChange }) {
  return (
    <div className="task-search">
      <input
        type="search"
        placeholder="Buscar tarefa..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        aria-label="Buscar tarefa"
      />
      <div className="task-search-filters" role="group" aria-label="Filtrar por status">
        {SEARCH_FILTER_LIST.map((f) => (
          <button
            key={f}
            type="button"
            className={filter === f ? 'active' : ''}
            aria-pressed={filter === f}
            onClick={() => onFilterChange(f)}
          >
            {SEARCH_FILTER_LABEL[f]}
          </button>
        ))}
      </div>
    </div>
  );
}
