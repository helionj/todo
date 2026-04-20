# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server (HMR)
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run lint` — ESLint (flat config in `eslint.config.js`)

Node is managed via nvm. If `npm` is not on PATH, run `source ~/.nvm/nvm.sh` first.

## Stack

React 19 + Vite 8 + Recharts 3. Tasks persist in `localStorage` under the key `todo.tasks`.

## Architecture

State flows through a single custom hook, [src/hooks/useTasks.js](src/hooks/useTasks.js):

- Holds the `tasks` array, exposes `addTask / updateStatus / removeTask`.
- A `useEffect` syncs every mutation to `localStorage`. Initial state is loaded synchronously from storage.
- Task shape: `{ id, title, status, createdAt }` where `status ∈ { pendente, em_andamento, concluida }`.

[src/utils/status.js](src/utils/status.js) is the **single source of truth** for status values, PT-BR labels, colors, and the `countByStatus(tasks)` aggregator. Charts and UI must import from here — do not hardcode status strings, labels, or hex colors elsewhere.

[src/App.jsx](src/App.jsx) composes the form/list panel and the dashboard panel. The dashboard renders two Recharts components ([StatusChart](src/components/StatusChart.jsx) = Pie, [ProgressChart](src/components/ProgressChart.jsx) = Bar), both driven off `countByStatus`. Adding a new status means updating `status.js` only — charts and the `<select>` in `TaskItem` pick it up automatically via `STATUS_LIST`.
