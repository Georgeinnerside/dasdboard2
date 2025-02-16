import Header from "../common/Header";
import ChannelPerformanceChart from "../components/analytics/ChannelPerformanceChart";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation";
import OverviewCard from "../components/analytics/OverviewCard";
import ProductPerformanceChart from "../components/analytics/ProductPerformanceChart";
import RevenueChart from "../components/analytics/RevenueChart";
import UserRetention from "../components/analytics/UserRetention";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-white">
      <Header title="Analytics Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCard />
        <RevenueChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformanceChart />
          <ProductPerformanceChart />
          <UserRetention />
          <CustomerSegmentation />
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
