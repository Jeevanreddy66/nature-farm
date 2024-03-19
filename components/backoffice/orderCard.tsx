"use client";

import { FC } from "react";

interface OrderCardProps {
  Icon: FC;
  bgColor: string;
  orderTitle: string;
  count: number;
}

export const OrderCard: FC<OrderCardProps> = ({
  Icon,
  bgColor,
  orderTitle,
  count,
}) => {
  return (
    <>
      <div className="rounded-lg shadow-lg bg-slate-700 p-4">
        <div className="flex space-x-4 items-center">
          <div
            style={{ backgroundColor: bgColor }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-slate-50"
          >
            <Icon />
          </div>

          <div className="">
            <p>{orderTitle}</p>
            <h3 className="text-2xl font-bold">{count}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
