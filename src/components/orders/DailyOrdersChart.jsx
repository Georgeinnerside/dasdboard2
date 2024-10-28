import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ordersData = [
  { date: "10/01", orders: 45 },
  { date: "10/02", orders: 55 },
  { date: "10/03", orders: 42 },
  { date: "10/04", orders: 59 },
  { date: "10/05", orders: 65 },
  { date: "10/06", orders: 55 },
  { date: "10/07", orders: 62 },
];

const DailyOrdersChart = () => {
  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
        Daily Orders
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={ordersData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                bordeColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#8b5cf6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DailyOrdersChart;
