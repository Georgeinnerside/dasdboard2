import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  AXaxis,
  YAxis,
  XAxis,
} from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
  { name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
  { name: "Product B", sales: 3000, revenue: 1300, profit: 2210 },
  { name: "Product C", sales: 2000, revenue: 9000, profit: 2000 },
  { name: "Product D", sales: 2780, revenue: 3890, profit: 2700 },
  { name: "Product E", sales: 1890, revenue: 4500, profit: 2100 },
];

const ProductPerformanceChart = () => {
  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
        Product Performance
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={productPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="sales" fill="#9ca3af" />
            <XAxis fill="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
                color: "#e5e7eb",
              }}
            />
            <Legend />
            <Bar dataKey="sales" fill="#8b5cf6" />
            <Bar dataKey="revenue" fill="#10b981" />
            <Bar dataKey="profit" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProductPerformanceChart;
