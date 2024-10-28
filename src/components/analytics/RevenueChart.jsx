import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const revData = [
  { month: "Jan", revenue: 4000, target: 3800 },
  { month: "Feb", revenue: 3000, target: 2800 },
  { month: "Mar", revenue: 5000, target: 3400 },
  { month: "Apr", revenue: 4500, target: 4200 },
  { month: "May", revenue: 6000, target: 5200 },
  { month: "Jun", revenue: 5500, target: 5800 },
  { month: "Jul", revenue: 7000, target: 7200 },
];

const RevenueChart = () => {
  const [selectedTime, setSelectedTime] = useState("This Month");

  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-300 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center text-gray-100 mb-4">
        <h2 className="text-xl font-semibold text-center text-gray-700">
          Revenue vs Target
        </h2>
        <select
          className="bg-gray-300 text-gray-900 rounded-md px-3 py-1 focus:outline-non focus:ring-2 focus:ring-blue-500"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option>This Year</option>
          <option>This Month</option>
          <option>This Week</option>
          <option>This Day</option>
        </select>
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={revData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="year" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4b55563",
                color: "#e5e7eb",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;
