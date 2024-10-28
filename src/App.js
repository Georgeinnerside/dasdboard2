import { Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductPage from "./pages/ProductPage";
import Sidebar from "./common/Sidebar";
import Users from "./pages/Users";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 overflow-hidden">
      {/* background-color */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0  opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </div>
  );
}

export default App;
