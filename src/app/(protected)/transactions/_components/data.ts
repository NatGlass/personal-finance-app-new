// Import all avatar images
import EmmaRichardson from "@/assets/images/avatars/emma-richardson.jpg";
import SavoryBitesBistro from "@/assets/images/avatars/savory-bites-bistro.jpg";
import DanielCarter from "@/assets/images/avatars/daniel-carter.jpg";
import SunPark from "@/assets/images/avatars/sun-park.jpg";
import UrbanServicesHub from "@/assets/images/avatars/urban-services-hub.jpg";
import LiamHughes from "@/assets/images/avatars/liam-hughes.jpg";
import LilyRamirez from "@/assets/images/avatars/lily-ramirez.jpg";
import EthanClark from "@/assets/images/avatars/ethan-clark.jpg";
import JamesThompson from "@/assets/images/avatars/james-thompson.jpg";
import PixelPlayground from "@/assets/images/avatars/pixel-playground.jpg";
import EllaPhillips from "@/assets/images/avatars/ella-phillips.jpg";
import SofiaPeterson from "@/assets/images/avatars/sofia-peterson.jpg";
import MasonMartinez from "@/assets/images/avatars/mason-martinez.jpg";
import GreenPlateEatery from "@/assets/images/avatars/green-plate-eatery.jpg";
import SebastianCook from "@/assets/images/avatars/sebastian-cook.jpg";
import WilliamHarris from "@/assets/images/avatars/william-harris.jpg";
import ElevateEducation from "@/assets/images/avatars/elevate-education.jpg";
import SerenitySpaAndWellness from "@/assets/images/avatars/serenity-spa-and-wellness.jpg";
import SparkElectricSolutions from "@/assets/images/avatars/spark-electric-solutions.jpg";
import RinaSato from "@/assets/images/avatars/rina-sato.jpg";
import SwiftRideShare from "@/assets/images/avatars/swift-ride-share.jpg";
import AquaFlowUtilities from "@/assets/images/avatars/aqua-flow-utilities.jpg";
import EcoFuelEnergy from "@/assets/images/avatars/ecofuel-energy.jpg";
import YunaKim from "@/assets/images/avatars/yuna-kim.jpg";
import FlavorFiesta from "@/assets/images/avatars/flavor-fiesta.jpg";
import HarperEdwards from "@/assets/images/avatars/harper-edwards.jpg";
import BuzzMarketingGroup from "@/assets/images/avatars/buzz-marketing-group.jpg";
import TechNovaInnovations from "@/assets/images/avatars/technova-innovations.jpg";
import ByteWise from "@/assets/images/avatars/bytewise.jpg";
import NimbusDataStorage from "@/assets/images/avatars/nimbus-data-storage.jpg";
import EmmaRichardsonSecond from "@/assets/images/avatars/emma-richardson.jpg";
import SunParkSecond from "@/assets/images/avatars/sun-park.jpg";
import HarperEdwardsSecond from "@/assets/images/avatars/harper-edwards.jpg";
import LiamHughesSecond from "@/assets/images/avatars/liam-hughes.jpg";
import LilyRamirezSecond from "@/assets/images/avatars/lily-ramirez.jpg";
import EthanClarkSecond from "@/assets/images/avatars/ethan-clark.jpg";
import RinaSatoSecond from "@/assets/images/avatars/rina-sato.jpg";
import JamesThompsonSecond from "@/assets/images/avatars/james-thompson.jpg";
import EllaPhillipsSecond from "@/assets/images/avatars/ella-phillips.jpg";
import YunaKimSecond from "@/assets/images/avatars/yuna-kim.jpg";
import SofiaPetersonSecond from "@/assets/images/avatars/sofia-peterson.jpg";
import MasonMartinezSecond from "@/assets/images/avatars/mason-martinez.jpg";
import SebastianCookSecond from "@/assets/images/avatars/sebastian-cook.jpg";
import WilliamHarrisSecond from "@/assets/images/avatars/william-harris.jpg";
import ElevateEducationSecond from "@/assets/images/avatars/elevate-education.jpg";
import SerenitySpaAndWellnessSecond from "@/assets/images/avatars/serenity-spa-and-wellness.jpg";
import SparkElectricSolutionsSecond from "@/assets/images/avatars/spark-electric-solutions.jpg";
import SwiftRideShareSecond from "@/assets/images/avatars/swift-ride-share.jpg";

export type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

export const transactionsData: Transaction[] = [
  {
    avatar: EmmaRichardson.src,
    name: "Emma Richardson",
    category: "General",
    date: "2024-08-19T14:23:11Z",
    amount: 75.5,
    recurring: false,
  },
  {
    avatar: SavoryBitesBistro.src,
    name: "Savory Bites Bistro",
    category: "Dining Out",
    date: "2024-08-19T20:23:11Z",
    amount: -55.5,
    recurring: false,
  },
  {
    avatar: DanielCarter.src,
    name: "Daniel Carter",
    category: "General",
    date: "2024-08-18T09:45:32Z",
    amount: -42.3,
    recurring: false,
  },
  {
    avatar: SunPark.src,
    name: "Sun Park",
    category: "General",
    date: "2024-08-17T16:12:05Z",
    amount: 120.0,
    recurring: false,
  },
  {
    avatar: UrbanServicesHub.src,
    name: "Urban Services Hub",
    category: "General",
    date: "2024-08-17T21:08:09Z",
    amount: -65.0,
    recurring: false,
  },
  {
    avatar: LiamHughes.src,
    name: "Liam Hughes",
    category: "Groceries",
    date: "2024-08-15T18:20:33Z",
    amount: 65.75,
    recurring: false,
  },
  {
    avatar: LilyRamirez.src,
    name: "Lily Ramirez",
    category: "General",
    date: "2024-08-14T13:05:27Z",
    amount: 50.0,
    recurring: false,
  },
  {
    avatar: EthanClark.src,
    name: "Ethan Clark",
    category: "Dining Out",
    date: "2024-08-13T20:15:59Z",
    amount: -32.5,
    recurring: false,
  },
  {
    avatar: JamesThompson.src,
    name: "James Thompson",
    category: "Entertainment",
    date: "2024-08-11T15:45:38Z",
    amount: -5.0,
    recurring: false,
  },
  {
    avatar: PixelPlayground.src,
    name: "Pixel Playground",
    category: "Entertainment",
    date: "2024-08-11T18:45:38Z",
    amount: -10.0,
    recurring: true,
  },
  {
    avatar: EllaPhillips.src,
    name: "Ella Phillips",
    category: "Dining Out",
    date: "2024-08-10T19:22:51Z",
    amount: -45.0,
    recurring: false,
  },
  {
    avatar: SofiaPeterson.src,
    name: "Sofia Peterson",
    category: "Transportation",
    date: "2024-08-08T08:55:17Z",
    amount: -15.0,
    recurring: false,
  },
  {
    avatar: MasonMartinez.src,
    name: "Mason Martinez",
    category: "Lifestyle",
    date: "2024-08-07T17:40:29Z",
    amount: -35.25,
    recurring: false,
  },
  {
    avatar: GreenPlateEatery.src,
    name: "Green Plate Eatery",
    category: "Groceries",
    date: "2024-08-06T08:25:44Z",
    amount: -78.5,
    recurring: false,
  },
  {
    avatar: SebastianCook.src,
    name: "Sebastian Cook",
    category: "Transportation",
    date: "2024-08-06T10:05:44Z",
    amount: -22.5,
    recurring: false,
  },
  {
    avatar: WilliamHarris.src,
    name: "William Harris",
    category: "Personal Care",
    date: "2024-08-05T14:30:56Z",
    amount: -10.0,
    recurring: false,
  },
  {
    avatar: ElevateEducation.src,
    name: "Elevate Education",
    category: "Education",
    date: "2024-08-04T11:15:22Z",
    amount: -50.0,
    recurring: true,
  },
  {
    avatar: SerenitySpaAndWellness.src,
    name: "Serenity Spa & Wellness",
    category: "Personal Care",
    date: "2024-08-03T14:00:37Z",
    amount: -30.0,
    recurring: true,
  },
  {
    avatar: SparkElectricSolutions.src,
    name: "Spark Electric Solutions",
    category: "Bills",
    date: "2024-08-02T09:25:11Z",
    amount: -100.0,
    recurring: true,
  },
  {
    avatar: RinaSato.src,
    name: "Rina Sato",
    category: "Bills",
    date: "2024-08-02T13:31:11Z",
    amount: -50.0,
    recurring: false,
  },
  {
    avatar: SwiftRideShare.src,
    name: "Swift Ride Share",
    category: "Transportation",
    date: "2024-08-01T18:40:33Z",
    amount: -18.75,
    recurring: false,
  },
  {
    avatar: AquaFlowUtilities.src,
    name: "Aqua Flow Utilities",
    category: "Bills",
    date: "2024-07-30T13:20:14Z",
    amount: -100.0,
    recurring: true,
  },
  {
    avatar: EcoFuelEnergy.src,
    name: "EcoFuel Energy",
    category: "Bills",
    date: "2024-07-29T11:55:29Z",
    amount: -35.0,
    recurring: true,
  },
  {
    avatar: YunaKim.src,
    name: "Yuna Kim",
    category: "Dining Out",
    date: "2024-07-29T13:51:29Z",
    amount: -28.5,
    recurring: false,
  },
  {
    avatar: FlavorFiesta.src,
    name: "Flavor Fiesta",
    category: "Dining Out",
    date: "2024-07-27T20:15:06Z",
    amount: -42.75,
    recurring: false,
  },
  {
    avatar: HarperEdwards.src,
    name: "Harper Edwards",
    category: "Shopping",
    date: "2024-07-26T09:43:23Z",
    amount: -89.99,
    recurring: false,
  },
  {
    avatar: BuzzMarketingGroup.src,
    name: "Buzz Marketing Group",
    category: "General",
    date: "2024-07-26T14:40:23Z",
    amount: 3358.0,
    recurring: false,
  },
  {
    avatar: TechNovaInnovations.src,
    name: "TechNova Innovations",
    category: "Shopping",
    date: "2024-07-25T16:25:37Z",
    amount: -29.99,
    recurring: false,
  },
  {
    avatar: ByteWise.src,
    name: "ByteWise",
    category: "Lifestyle",
    date: "2024-07-23T09:35:14Z",
    amount: -49.99,
    recurring: true,
  },
  {
    avatar: NimbusDataStorage.src,
    name: "Nimbus Data Storage",
    category: "Bills",
    date: "2024-07-21T10:05:42Z",
    amount: -9.99,
    recurring: true,
  },
  {
    avatar: EmmaRichardsonSecond.src,
    name: "Emma Richardson",
    category: "General",
    date: "2024-07-20T17:30:55Z",
    amount: -25.0,
    recurring: false,
  },
  {
    avatar: DanielCarter.src,
    name: "Daniel Carter",
    category: "General",
    date: "2024-07-19T12:45:09Z",
    amount: 50.0,
    recurring: false,
  },
  {
    avatar: SunParkSecond.src,
    name: "Sun Park",
    category: "General",
    date: "2024-07-18T19:20:23Z",
    amount: -38.5,
    recurring: false,
  },
  {
    avatar: HarperEdwardsSecond.src,
    name: "Harper Edwards",
    category: "Shopping",
    date: "2024-07-17T14:55:37Z",
    amount: -29.99,
    recurring: false,
  },
  {
    avatar: LiamHughesSecond.src,
    name: "Liam Hughes",
    category: "Groceries",
    date: "2024-07-16T10:10:51Z",
    amount: -52.75,
    recurring: false,
  },
  {
    avatar: LilyRamirezSecond.src,
    name: "Lily Ramirez",
    category: "General",
    date: "2024-07-15T16:35:04Z",
    amount: 75.0,
    recurring: false,
  },
  {
    avatar: EthanClarkSecond.src,
    name: "Ethan Clark",
    category: "Dining Out",
    date: "2024-07-14T20:50:18Z",
    amount: -41.25,
    recurring: false,
  },
  {
    avatar: RinaSatoSecond.src,
    name: "Rina Sato",
    category: "Entertainment",
    date: "2024-07-13T09:15:32Z",
    amount: -10.0,
    recurring: false,
  },
  {
    avatar: JamesThompsonSecond.src,
    name: "James Thompson",
    category: "Bills",
    date: "2024-07-12T13:40:46Z",
    amount: -95.5,
    recurring: false,
  },
  {
    avatar: EllaPhillipsSecond.src,
    name: "Ella Phillips",
    category: "Dining Out",
    date: "2024-07-11T18:05:59Z",
    amount: -33.75,
    recurring: false,
  },
  {
    avatar: YunaKimSecond.src,
    name: "Yuna Kim",
    category: "Dining Out",
    date: "2024-07-10T12:30:13Z",
    amount: -27.5,
    recurring: false,
  },
  {
    avatar: SofiaPetersonSecond.src,
    name: "Sofia Peterson",
    category: "Transportation",
    date: "2024-07-09T08:55:27Z",
    amount: -12.5,
    recurring: false,
  },
  {
    avatar: MasonMartinezSecond.src,
    name: "Mason Martinez",
    category: "Lifestyle",
    date: "2024-07-08T15:20:41Z",
    amount: -65.0,
    recurring: false,
  },
  {
    avatar: SebastianCookSecond.src,
    name: "Sebastian Cook",
    category: "Transportation",
    date: "2024-07-07T11:45:55Z",
    amount: -20.0,
    recurring: false,
  },
  {
    avatar: WilliamHarrisSecond.src,
    name: "William Harris",
    category: "General",
    date: "2024-07-06T17:10:09Z",
    amount: 20.0,
    recurring: false,
  },
  {
    avatar: ElevateEducationSecond.src,
    name: "Elevate Education",
    category: "Education",
    date: "2024-07-05T11:15:22Z",
    amount: -50.0,
    recurring: true,
  },
  {
    avatar: SerenitySpaAndWellnessSecond.src,
    name: "Serenity Spa & Wellness",
    category: "Personal Care",
    date: "2024-07-03T14:00:37Z",
    amount: -30.0,
    recurring: true,
  },
  {
    avatar: SparkElectricSolutionsSecond.src,
    name: "Spark Electric Solutions",
    category: "Bills",
    date: "2024-07-02T09:25:51Z",
    amount: -100.0,
    recurring: true,
  },
  {
    avatar: SwiftRideShareSecond.src,
    name: "Swift Ride Share",
    category: "Transportation",
    date: "2024-07-02T19:50:05Z",
    amount: -16.5,
    recurring: false,
  },
];
