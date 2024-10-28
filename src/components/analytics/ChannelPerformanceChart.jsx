import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const channelData = [
  { name: "Organic Search", value: 4000 },
  { name: "Paid Search", value: 3000 },
  { name: "Direct", value: 2000 },
  { name: "Social Media", value: 2780 },
  { name: "Referral", value: 1890 },
  { name: "Email", value: 2390 },
];

const colors = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#0088fe",
  "#00c49f",
];
const ChannelPerformanceChart = () => {
  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
        Channel Performance
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={channelData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {channelData.map((entry, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                );
              })}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41,55,0.8)",
                borderColor: "#4b5563",
                color: "#e5e7eb",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ChannelPerformanceChart;
