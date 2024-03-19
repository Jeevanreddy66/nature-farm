import { ShoppingCart, RefreshCcw, Truck, CheckCheck } from "lucide-react";

interface OrderDataType {
  Icon: any;
  bgColor: string;
  orderTitle: string;
  count: number;
}

export const orderCardData: OrderDataType[] = [
  {
    Icon: ShoppingCart,
    bgColor: "rgb(251, 140, 0)",
    orderTitle: "Total Orders",
    count: 353,
  },
  {
    Icon: RefreshCcw,
    bgColor: "rgb(25, 190, 135)",
    orderTitle: "Pending Orders",
    count: 113,
  },
  {
    Icon: Truck,
    bgColor: "rgb(37, 99, 235)",
    orderTitle: "Orders Processing",
    count: 89,
  },
  {
    Icon: CheckCheck,
    bgColor: "rgb(22, 163, 74)",
    orderTitle: "Orders Delivered",
    count: 48,
  },
];
