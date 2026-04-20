import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { countByStatus } from '../utils/status';

export default function StatusChart({ tasks }) {
  const data = countByStatus(tasks).map((d) => ({ name: d.label, value: d.value, color: d.color }));
  const total = data.reduce((acc, d) => acc + d.value, 0);

  return (
    <div className="chart-card">
      <h3>Distribuição por Status</h3>
      {total === 0 ? (
        <p className="empty">Sem dados para exibir.</p>
      ) : (
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
