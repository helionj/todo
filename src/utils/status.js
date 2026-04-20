export const STATUS = {
  PENDENTE: 'pendente',
  EM_ANDAMENTO: 'em_andamento',
  CONCLUIDA: 'concluida',
};

export const STATUS_LIST = [STATUS.PENDENTE, STATUS.EM_ANDAMENTO, STATUS.CONCLUIDA];

export const STATUS_LABEL = {
  [STATUS.PENDENTE]: 'Pendente',
  [STATUS.EM_ANDAMENTO]: 'Em andamento',
  [STATUS.CONCLUIDA]: 'Concluída',
};

export const STATUS_COLOR = {
  [STATUS.PENDENTE]: '#f59e0b',
  [STATUS.EM_ANDAMENTO]: '#3b82f6',
  [STATUS.CONCLUIDA]: '#10b981',
};

export function countByStatus(tasks) {
  return STATUS_LIST.map((status) => ({
    status,
    label: STATUS_LABEL[status],
    color: STATUS_COLOR[status],
    value: tasks.filter((t) => t.status === status).length,
  }));
}
