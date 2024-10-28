import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Trash, Edit } from "lucide-react";

const ITEM_DATA = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 1,
    name: "John Smith",
    email: "smith@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 1,
    name: "Bob Jay",
    email: "jay@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: 1,
    name: "Giovanni Manu",
    email: "gio@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 1,
    name: "Lekia Charles",
    email: "lekia@example.com",
    role: "Moderator",
    status: "Active",
  },
];

const UserTable = () => {
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

  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between overflow-x-auto items-center mb-6">
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
      <div className="overflow-x-auto ">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-gray-700">
            {filterItem.map(({ id, name, email, role, status }) => {
              return (
                <motion.tr
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center  text-white font-semibold">
                          {name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-700">
                          {name}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-700">{email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-500">
                      {" "}
                      {role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        status === "Active"
                          ? "bg-green-800 text-green-100"
                          : "bg-red-800 text-red-100"
                      }`}
                    >
                      {status}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                      <Edit />
                    </button>
                    <button className="text-red-400 hover:text-red-300 mr-2">
                      <Trash />
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

export default UserTable;
