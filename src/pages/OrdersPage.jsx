import Header from "../common/Header";
import { motion } from "framer-motion";
import { ShoppingBag, Clock, CheckCircle, DollarSign } from "lucide-react";
import StatCard from "../common/StatCard";
import DailyOrdersChart from "../components/orders/DailyOrdersChart";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completeOrders: "1,178",
  totalRevenue: "$98,765",
};
const Orders = () => {
  return (
    <div className="bg-white flex-1 relative z-10 overflow-auto">
      <Header title={"Orders"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={ShoppingBag}
            value={orderStats.totalOrders}
            color="#6366f1"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={orderStats.pendingOrders}
            color="#f59e0b"
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={orderStats.completeOrders}
            color="#10b981"
          />
          <StatCard
            name="Total Revenus"
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="#ef4444"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrdersChart />
          <OrderDistribution />
        </div>

        <OrdersTable />
      </main>
    </div>
  );
};

export default Orders;
