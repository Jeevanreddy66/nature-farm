"use client";

import { FC } from "react";

// Normal imports
import { Heading } from "@/components/backoffice/heading";
import { SalesCard } from "@/components/backoffice/salesCard";
import { salesCardData } from "@/utils/salesCard";
import { orderCardData } from "@/utils/orderCard";
import { OrderCard } from "@/components/backoffice/orderCard";
import { WeeklySalesChart } from "@/components/backoffice/weeklySalesChart";
import { BestSellingProductsChart } from "@/components/backoffice/bestSellProdChart";
import { CustomDataTable } from "@/components/backoffice/customDataTable";

// Lucide React Component Imports
import { Layers } from "lucide-react";

const DashboardPage: FC = () => {
  return (
    <>
      <div>
        <Heading title="Dashboard Overview" />

        {/* Sales Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
          {salesCardData.map((item, i) => (
            <SalesCard
              key={i}
              Icon={item.Icon}
              cardTitle={item.cardTitle}
              revenue={item.revenue}
              bgColor={item.bgColor}
            />
          ))}
        </div>

        {/* Order Data Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {orderCardData.map((item, i) => (
            <OrderCard
              key={i}
              Icon={item.Icon}
              bgColor={item.bgColor}
              orderTitle={item.orderTitle}
              count={item.count}
            />
          ))}
        </div>

        {/* Weekly Sales & Best Selling Products Data Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <WeeklySalesChart />

          <BestSellingProductsChart />
        </div>

        {/* Recent Orders Table */}
        <CustomDataTable />
      </div>
    </>
  );
};

export default DashboardPage;
