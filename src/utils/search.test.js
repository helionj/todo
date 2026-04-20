import { test } from 'node:test';
import assert from 'node:assert/strict';
import { STATUS } from './status.js';
import { SEARCH_FILTERS, filterTasks } from './search.js';

const sample = [
  { id: '1', title: 'Comprar pão', status: STATUS.PENDENTE, createdAt: 1 },
  { id: '2', title: 'Estudar React', status: STATUS.EM_ANDAMENTO, createdAt: 2 },
  { id: '3', title: 'Entregar relatório', status: STATUS.CONCLUIDA, createdAt: 3 },
  { id: '4', title: 'Revisar PR', status: STATUS.PENDENTE, createdAt: 4 },
];

test('retorna todas as tarefas quando query vazia e filtro todas', () => {
  const result = filterTasks(sample, { query: '', filter: SEARCH_FILTERS.TODAS });
  assert.equal(result.length, 4);
});

test('filtra por status pendente', () => {
  const result = filterTasks(sample, { filter: SEARCH_FILTERS.PENDENTE });
  assert.deepEqual(result.map((t) => t.id), ['1', '4']);
});

test('filtra por status concluida', () => {
  const result = filterTasks(sample, { filter: SEARCH_FILTERS.CONCLUIDA });
  assert.deepEqual(result.map((t) => t.id), ['3']);
});

test('busca por título é case-insensitive e com trim', () => {
  const result = filterTasks(sample, { query: '  REACT ' });
  assert.deepEqual(result.map((t) => t.id), ['2']);
});

test('combina query + filtro de status', () => {
  const result = filterTasks(sample, {
    query: 'revisar',
    filter: SEARCH_FILTERS.PENDENTE,
  });
  assert.deepEqual(result.map((t) => t.id), ['4']);
});

test('retorna lista vazia quando nenhuma tarefa combina', () => {
  const result = filterTasks(sample, { query: 'inexistente' });
  assert.deepEqual(result, []);
});

test('retorna lista vazia quando entrada é vazia', () => {
  assert.deepEqual(filterTasks([], { query: 'algo' }), []);
});

test('usa filtro TODAS como padrão quando opções omitidas', () => {
  assert.equal(filterTasks(sample).length, 4);
});
