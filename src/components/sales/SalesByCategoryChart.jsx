import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesByCategoryData = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Gardening", value: 250 },
  { name: "Gadgets", value: 150 },
];

const colors = ["#8884d8", "#82ca9d", "#ff8042", "#0088fe"];

const SalesByCategoryChart = () => {
  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
        Sales by Category
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={salesByCategoryData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {salesByCategoryData.map((entry, index) => {
                return (
                  <Cell key={index} fill={colors[index % colors.length]} />
                );
              })}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4b5563",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesByCategoryChart;
