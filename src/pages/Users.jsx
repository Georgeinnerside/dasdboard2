import { motion } from "framer-motion";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import Header from "../common/Header";
import StatCard from "../common/StatCard";
import UserTable from "../components/users/UserTable";
import UserActivityHeatMap from "../components/users/UserActivityHeatMap ";
import UserDemographicsChart from "../components/users/UserDemographicsChart";
import UserGrowthChart from "../components/users/UserGrowthChart";

const userStats = {
  totalUsers: 153831,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};
const Users = () => {
  return (
    <div className="bg-white flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* stats */}
        <motion.div
          className="grid grid-cols gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366f1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10b981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#f59e0b"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#ef4444"
          />
        </motion.div>

        {/* user table */}
        <UserTable />

        {/* User Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <UserGrowthChart />
          <UserActivityHeatMap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default Users;
