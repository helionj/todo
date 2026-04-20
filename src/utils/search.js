import { STATUS } from './status.js';

export const SEARCH_FILTERS = {
  TODAS: 'todas',
  PENDENTE: STATUS.PENDENTE,
  CONCLUIDA: STATUS.CONCLUIDA,
};

export const SEARCH_FILTER_LIST = [
  SEARCH_FILTERS.TODAS,
  SEARCH_FILTERS.PENDENTE,
  SEARCH_FILTERS.CONCLUIDA,
];

export const SEARCH_FILTER_LABEL = {
  [SEARCH_FILTERS.TODAS]: 'Todas',
  [SEARCH_FILTERS.PENDENTE]: 'Pendentes',
  [SEARCH_FILTERS.CONCLUIDA]: 'Concluídas',
};

export function filterTasks(tasks, { query = '', filter = SEARCH_FILTERS.TODAS } = {}) {
  const normalized = query.trim().toLowerCase();

  return tasks.filter((task) => {
    const matchesQuery =
      normalized === '' || task.title.toLowerCase().includes(normalized);
    const matchesFilter =
      filter === SEARCH_FILTERS.TODAS || task.status === filter;
    return matchesQuery && matchesFilter;
  });
}
