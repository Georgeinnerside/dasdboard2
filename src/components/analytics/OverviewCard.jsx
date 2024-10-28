import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  ShoppingBag,
  Eye,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

const overviewData = [
  { name: "Revenue", value: "$1,201,003", change: 12.5, icon: DollarSign },
  { name: "Users", value: "41,503", change: 8.5, icon: Users },
  { name: "Orders", value: "9,223", change: -3.2, icon: ShoppingBag },
  { name: "Page Views", value: "$1,341,002", change: 14.8, icon: Eye },
];

const OverviewCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {overviewData.map(({ name, value, change, icon: Icon, index }) => {
        return (
          <motion.div
            key={index}
            className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-medium text-center text-gray-400">
                  {name}
                </h2>
                <p className="mt-1 text-xl font-semibold text-gray-500">
                  {value}
                </p>
              </div>

              <div
                className={`
              p-3 rounded-full ${
                change >= 0
                  ? "bg-green-500 bg-opacity-20"
                  : "bg-red-500 bg-opacity-20"
              }
              `}
              >
                <Icon
                  className={`size-6 ${
                    change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                />
              </div>
            </div>
            <div
              className={`mt-4 flex items-center ${
                change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {change >= 0 ? (
                <ArrowUpRight size={"20"} />
              ) : (
                <ArrowDownRight size={"20"} />
              )}
              <span className="ml-1 text-sm font-medium">{change}%</span>
              <span className="ml-2 text-sm text-gray-400">vs last period</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default OverviewCard;
