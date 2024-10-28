import { motion } from "framer-motion";
import { Edit, Search, Trash } from "lucide-react";
import { useState } from "react";

const ITEM_DATA = [
  {
    id: 1,
    name: "Wireless Bud",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Wash",
    category: "Electronics",
    price: 199.99,
    stock: 199.99,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 29.99,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 79.99,
    sales: 720,
  },
];

const ProductTable = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterItem, setFilterItem] = useState(ITEM_DATA);

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchItem(search);
    const filterData = ITEM_DATA.filter(
      (data) =>
        data.name.toLowerCase().includes(search) ||
        data.category.toLowerCase().includes(search)
    );
    setFilterItem(filterData);
  };

  const handleDelete = (item_id) => {
    const deleteItem = filterItem.filter((item) => item.id !== item_id);
    setFilterItem(deleteItem);
  };

  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="search products..."
            className="bg-gray-300 text-white placholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchItem}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700  ">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filterItem.map(({ id, name, category, price, stock, sales }) => {
              return (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  key={id}
                >
                  <td className="px-6 py-4 whitespaces-nowrap text-sm font-medium text-gray-700 flex gap-2">
                    {name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <button className="text-indigo-400 hover:text-red-300">
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable;
