import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const userGrowthData = [
  { month: "jan", sales: 4000 },
  { month: "feb", sales: 3300 },
  { month: "mar", sales: 2100 },
  { month: "apr", sales: 2000 },
  { month: "may", sales: 7200 },
];

const UserGrowthChart = () => {
  return (
    <div>
      {" "}
      <motion.div
        className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-meidum mb-4 text-center text-gray-700">
          User Growth
        </h2>

        <div className="h-[320px] ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                content={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4b5563",
                }}
                itemStyle={{ color: "#e5e7eb" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default UserGrowthChart;
