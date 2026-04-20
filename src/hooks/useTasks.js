import { useEffect, useState } from 'react';
import { STATUS } from '../utils/status';

const STORAGE_KEY = 'todo.tasks';

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useTasks() {
  const [tasks, setTasks] = useState(loadInitial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    const trimmed = title.trim();
    if (!trimmed) return;
    const newTask = {
      id: crypto.randomUUID(),
      title: trimmed,
      status: STATUS.PENDENTE,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  function updateStatus(id, status) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return { tasks, addTask, updateStatus, removeTask };
}
