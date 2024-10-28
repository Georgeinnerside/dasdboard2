import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const salesData = [
  { name: "jan", sales: 4000 },
  { name: "feb", sales: 3300 },
  { name: "mar", sales: 2100 },
  { name: "apr", sales: 2000 },
  { name: "may", sales: 7200 },
  { name: "jun", sales: 5100 },
  { name: "jul", sales: 8100 },
  { name: "aug", sales: 8000 },
  { name: "sep", sales: 9000 },
  { name: "oct", sales: 9500 },
  { name: "nov", sales: 9800 },
];
const SalesOverviewCharts = () => {
  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl text-center font-medium mb-4 text-gray-700">Sales Overview</h2>

      <div className="h-80 ">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey={"name"} />
            <YAxis stroke="#020710BA" />
            <Tooltip
              content={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Line
              type="momotype"
              dataKey="sales"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewCharts;
