import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
const userRetentionData = [
  { name: "week 1", retention: 100 },
  { name: "week 2", retention: 70 },
  { name: "week 3", retention: 60 },
  { name: "week 4", retention: 50 },
  { name: "week 5", retention: 45 },
  { name: "week 6", retention: 40 },
  { name: "week 7", retention: 38 },
  { name: "week 8", retention: 30 },
];

const UserRetention = () => {
  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
        User Retention
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={userRetentionData}>
            <CartesianGrid strokeDasharray={"3 3"} stroke="#374151" />
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
            <Line
              type="monotone"
              dataKey="retention"
              stroke="#8b5cf6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserRetention;
