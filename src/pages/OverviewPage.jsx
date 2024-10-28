import Header from "../common/Header";
import { motion } from "framer-motion";
import StatCard from "../common/StatCard";
import { Zap, Users, ShoppingBag, BarChart2 } from "lucide-react";
import SalesOverviewCharts from "../components/Overview/SalesOverviewCharts";
import CategoryDistributionChart from "../components/Overview/CategoryDistributionChart";
import SalesChannelChart from "../components/Overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className="bg-white flex-1 overflow-auto  relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* stats */}
        <motion.div
          className=" grid grid-cols gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366f1"
          />
          <StatCard
            name="Total Sales"
            icon={Users}
            value="$12,345"
            color="#8b5cf6"
          />
          <StatCard
            name="Total Sales"
            icon={ShoppingBag}
            value="$12,345"
            color="#ec4899"
          />
          <StatCard
            name="Total Sales"
            icon={BarChart2}
            value="$12,345"
            color="#10b981"
          />
        </motion.div>

        {/* charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewCharts />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
