import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderListData = [
  {
    id: "OID001",
    client: "Charles Lekia",
    total: 235.4,
    status: "Delivered",
    date: "01/10/25",
  },
  {
    id: "OID002",
    client: "Giovanni Manu",
    total: 250.0,
    status: "Shipped",
    date: "02/10/25",
  },
  {
    id: "OID003",
    client: "John Lela",
    total: 350.2,
    status: "Pending",
    date: "03/10/25",
  },
  {
    id: "OID004",
    client: "Geo Bassey",
    total: 335.5,
    status: "Delivered",
    date: "04/10/25",
  },
  {
    id: "OID005",
    client: "Alex Lekia",
    total: 350.2,
    status: "Delivered",
    date: "05/10/25",
  },
  {
    id: "OID006",
    client: "Melvin Lakes",
    total: 120.4,
    status: "Delivered",
    date: "06/10/25",
  },
  {
    id: "OID007",
    client: "Darius Ike",
    total: 35.7,
    status: "Pending",
    date: "07/10/25",
  },
];

const OrdersTable = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredOrder, setFilterOrder] = useState(orderListData);
  const [isHidden, setIsHidden] = useState(false);

  const handleSearch = (e) => {
    const searchWords = e.target.value.toLowerCase();
    setSearchItem(searchWords);
    const filterWords = orderListData.filter(
      (word) =>
        word.id.toLowerCase().includes(searchWords) ||
        word.client.toLowerCase().includes(searchWords)
    );
    setFilterOrder(filterWords);
  };

  const toggleVisibles = () => {
    setIsHidden(!isHidden);
  };

  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between item-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Order List</h2>

        <div className="relative">
          <input
            type="text"
            placeholder="search orders..."
            className="bg-gray-300 text placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchItem}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {!isHidden && (
            <tbody className="divide divide-gray-700 ">
              {filteredOrder.map(({ id, client, total, status, date }) => {
                return (
                  <motion.tr
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    trsnsition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                      {id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                      {client}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                      {total.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-medium rounded-full ${
                          status === "Delivered"
                            ? "bg-green-800"
                            : status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : status === "Shipped"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                      {date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                      <button
                        onClick={toggleVisibles}
                        toggleVisibles
                        className="text-indigo-400 hover:text-indigo-300 mr-2"
                      >
                        <Eye />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </motion.div>
  );
};

export default OrdersTable;
