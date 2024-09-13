import {
  ArrowUpDown,
  ChartPie,
  Home,
  type LucideIcon,
  PiggyBank,
  ReceiptPoundSterling,
} from "lucide-react";

export interface SidebarLinkListProps {
  title: string;
  link: string;
  Icon: LucideIcon;
}

export const SidebarLinks: SidebarLinkListProps[] = [
  {
    title: "Overview",
    link: "/overview",
    Icon: Home,
  },
  {
    title: "Transactions",
    link: "/transactions",
    Icon: ArrowUpDown,
  },
  {
    title: "Budgets",
    link: "/budgets",
    Icon: ChartPie,
  },
  {
    title: "Pots",
    link: "/pots",
    Icon: PiggyBank,
  },
  {
    title: "Recurring Bills",
    link: "/recurring-bills",
    Icon: ReceiptPoundSterling,
  },
];
