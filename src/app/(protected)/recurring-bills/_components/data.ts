import ElevateEducation from "@/assets/images/avatars/elevate-education.jpg";
import BravoZenSpa from "@/assets/images/avatars/serenity-spa-and-wellness.jpg";
import CharlieElectricCompany from "@/assets/images/avatars/spark-electric-solutions.jpg";
import DeltaTaxi from "@/assets/images/avatars/swift-ride-share.jpg";
import EchoGameStore from "@/assets/images/avatars/aqua-flow-utilities.jpg";
import TangoGasCompany from "@/assets/images/avatars/ecofuel-energy.jpg";
import JulietRestaurant from "@/assets/images/avatars/savory-bites-bistro.jpg";

export type Bill = {
  title: string;
  amount: number;
  dueDate: string;
  avatar: string;
  status: "due" | "paid" | "imminent";
};

export const billsData: Bill[] = [
  {
    title: "Elevate Education",
    amount: 250,
    dueDate: "Monthly - 1st",
    status: "paid",
    avatar: ElevateEducation.src,
  },
  {
    title: "Bravo Zen Spa",
    amount: 70,
    dueDate: "Monthly - 3rd",
    status: "paid",
    avatar: BravoZenSpa.src,
  },
  {
    title: "Charlie Electric Company",
    amount: 10,
    dueDate: "Monthly - 5th",
    status: "imminent",
    avatar: CharlieElectricCompany.src,
  },
  {
    title: "Delta Taxi",
    amount: 30,
    dueDate: "Monthly - 6th",
    status: "imminent",
    avatar: DeltaTaxi.src,
  },
  {
    title: "Echo Game Store",
    amount: 10,
    dueDate: "Monthly - 12th",
    status: "due",
    avatar: EchoGameStore.src,
  },
  {
    title: "Tango Gas Company",
    amount: 225,
    dueDate: "Monthly - 22nd",
    status: "due",
    avatar: TangoGasCompany.src,
  },
  {
    title: "Juliet Restaurant",
    amount: 950,
    dueDate: "Monthly - 28th",
    status: "due",
    avatar: JulietRestaurant.src,
  },
];

