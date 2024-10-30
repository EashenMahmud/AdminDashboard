import React from 'react';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

function StatCard({ icon: Icon, title, value, trend }) {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <TrendingUp className="w-4 h-4 text-green-500" />
        <span className="text-sm text-green-500 ml-1">{trend}</span>
      </div>
    </div>
  );
}

function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={Users}
        title="Total Users"
        value="2,543"
        trend="+12.5% from last month"
      />
      <StatCard
        icon={DollarSign}
        title="Revenue"
        value="$45,234"
        trend="+8.2% from last month"
      />
      <StatCard
        icon={ShoppingCart}
        title="Orders"
        value="1,423"
        trend="+5.3% from last month"
      />
      <StatCard
        icon={TrendingUp}
        title="Growth"
        value="24.5%"
        trend="+2.1% from last month"
      />
    </div>
  );
}

export default DashboardStats;