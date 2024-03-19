"use client";

import { FC } from "react";

interface HeadingProps {
  title: string;
}

export const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-slate-50">{title}</h2>
    </>
  );
};
