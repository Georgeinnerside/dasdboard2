import { motion } from "framer-motion";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

const COLORS = ["#636ff1", "#8b5cf6", "#EC4899", "#10b981", "#f59e0b"];
const salesChannelData = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 37600 },
  { name: "Marketplace", value: 29200 },
  { name: "Social Media", value: 18700 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl text-center font-medium mb-4 text-gray-700">
        Sales by Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={salesChannelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
                color: "#e5e7eb",
              }}
            />
            <Legend />
            <Bar dataKey={"value"} fill="#8884d8">
              {salesChannelData.map((entry, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
