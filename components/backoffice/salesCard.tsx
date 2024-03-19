"use client";

import { FC, ReactElement } from "react";

interface SalesCardProps {
  Icon: FC;
  cardTitle: string;
  revenue: number;
  bgColor: string;
}

export const SalesCard: FC<SalesCardProps> = ({
  Icon,
  cardTitle,
  revenue,
  bgColor,
}) => {
  return (
    <>
      <div
        className="rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2"
        style={{ backgroundColor: bgColor }}
      >
        <Icon />

        <h4>{cardTitle}</h4>

        <h2 className="lg:text-3xl text-2xl">$ {revenue}</h2>
      </div>
    </>
  );
};
