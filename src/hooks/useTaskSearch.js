import { useMemo, useState } from 'react';
import { SEARCH_FILTERS, filterTasks } from '../utils/search';

export function useTaskSearch(tasks) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(SEARCH_FILTERS.TODAS);

  const filteredTasks = useMemo(
    () => filterTasks(tasks, { query, filter }),
    [tasks, query, filter],
  );

  return { query, setQuery, filter, setFilter, filteredTasks };
}
