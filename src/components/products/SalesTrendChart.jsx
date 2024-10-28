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

const salesData = [
  { name: "jan", sales: 4000 },
  { name: "feb", sales: 3300 },
  { name: "mar", sales: 2100 },
  { name: "apr", sales: 2000 },
  { name: "may", sales: 7200 },
];

const SalesTrendChart = () => {
  return (
    <div>
      {" "}
      <motion.div
        className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl text-center font-meidum mb-4 text-gray-700">
          Sales Trend
        </h2>

        <div className="h-80 ">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
              <XAxis dataKey={"name"} />
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
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default SalesTrendChart;
