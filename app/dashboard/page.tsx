"use client";

import React from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Settings,
} from "lucide-react";

const stats = [
  { title: "Total Orders", value: "1,245" },
  { title: "Revenue", value: "৳ 4,32,000" },
  { title: "Customers", value: "860" },
  { title: "Products", value: "120" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-26 flex max-w-7xl mx-auto">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 text-xl font-bold">Admin Panel</div>

        <nav className="px-4 space-y-2 text-sm">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarItem icon={<ShoppingBag size={18} />} label="Orders" />
          <SidebarItem icon={<Users size={18} />} label="Customers" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="text-sm text-gray-600">Admin</div>
        </header>

        {/* Content */}
        <section className="p-6 space-y-6">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm"
              >
                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
              </div>
            ))}
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">
              Recent Orders
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-gray-500 border-b">
                  <tr>
                    <th className="py-2">Order ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">#1023</td>
                    <td>Rahim</td>
                    <td className="text-green-600">Completed</td>
                    <td>৳ 8,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">#1024</td>
                    <td>Karim</td>
                    <td className="text-yellow-600">Pending</td>
                    <td>৳ 5,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

const SidebarItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Dashboard;
