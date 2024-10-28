import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";

const userActivityData = [
  {
    name: "Mon",
    "0-4": 20,
    "4-8": 40,
    "8-12": 60,
    "12-16": 80,
    "16-20": 100,
    "20-24": 30,
  },
  {
    name: "Tue",
    "0-4": 30,
    "4-8": 50,
    "8-12": 70,
    "12-16": 90,
    "16-20": 110,
    "20-24": 40,
  },
  {
    name: "Mon",
    "0-4": 40,
    " 4-8": 60,
    "8-12": 80,
    "12-16": 100,
    "16-20": 120,
    "20-24": 50,
  },
  {
    name: "Mon",
    "0-4": 50,
    "4-8": 70,
    "8-12": 90,
    "12-16": 110,
    "16-24": 130,
    "20-24": 60,
  },
  {
    name: "Mon",
    "0-4": 60,
    "4-8": 80,
    "8-12": 100,
    "12-16": 120,
    "16-20": 30,
    "20-24": 70,
  },
  {
    name: "Mon",
    "0-4": 70,
    "4-8": 90,
    "8-12": 110,
    "12-16": 130,
    "16-20": 30,
    "20-24": 80,
  },
  {
    name: "Mon",
    "0-4": 80,
    "4-8": 100,
    "8-12": 120,
    "12-16": 140,
    "16-20": 30,
    "20-24": 90,
  },
];

const UserActivityHeatMap = () => {
  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
        User Activity Heatmap
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={userActivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
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
            <Bar dataKey="0-4" stockId="a" fill="#6366f1" />
            <Bar dataKey="4-8" stockId="b" fill="#885cf6" />
            <Bar dataKey="8-12" stockId="c" fill="#ec4899" />
            <Bar dataKey="12-16" stockId="a" fill="#10b981" />
            <Bar dataKey="16-20" stockId="a" fill="#f59e0b" />
            <Bar dataKey="20-24" stockId="a" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserActivityHeatMap;
