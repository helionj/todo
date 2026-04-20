import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { countByStatus } from '../utils/status';

export default function ProgressChart({ tasks }) {
  const data = countByStatus(tasks).map((d) => ({ name: d.label, value: d.value, color: d.color }));

  return (
    <div className="chart-card">
      <h3>Quantidade por Status</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
