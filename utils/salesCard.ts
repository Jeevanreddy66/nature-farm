import { Layers, ShoppingCart, ShoppingBag, CreditCard } from "lucide-react";

interface salesDataType {
  Icon: any;
  cardTitle: string;
  revenue: number;
  bgColor: string;
}

export const salesCardData: salesDataType[] = [
  {
    Icon: Layers,
    cardTitle: "Today Orders",
    revenue: 1100,
    bgColor: "rgb(22, 163, 74)",
  },
  {
    Icon: Layers,
    cardTitle: "Yesterday Orders",
    revenue: 85.0,
    bgColor: "rgb(37, 99, 235)",
  },
  {
    Icon: ShoppingCart,
    cardTitle: "This Month",
    revenue: 56855,
    bgColor: "rgb(251, 140, 0)",
  },
  {
    Icon: ShoppingBag,
    cardTitle: "Last Month",
    revenue: 111344,
    bgColor: "rgb(147, 51, 234)",
  },
  {
    Icon: CreditCard,
    cardTitle: "All Time Sales",
    revenue: 566455,
    bgColor: "rgb(25, 190, 135)",
  },
];
