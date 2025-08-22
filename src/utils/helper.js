import sensor from "../assets/images/sensor.png";
import pcpart from "../assets/images/pcpart.png";
import diytool from "../assets/images/diy.png";
import cable from "../assets/images/cable.png";
import gaming from "../assets/images/game.png";
import pitool from "../assets/images/pitool.png";

import alive from "../assets/images/heroimage.png";

import vortex from "../assets/images/gamingpc.png";
import router from "../assets/images/router.png";
import chair from "../assets/images/gamingchair.png";

export const MENU_ITEMS = [
  { name: "Categories", link: "#" },
  {
    name: "PC Products",
    link: "#",
    dropdown: ["Standard PC Components", " Reference Earlier Examples"],
  },
  {
    name: "Services",
    link: "#",
    dropdown: ["Diy services"],
  },
  { name: "Support", link: "#", dropdown: ["FAQ’s", "Returns", "Contact"] },
  { name: "About", link: "#" },
  { name: "Blog", link: "#" },
  { name: "Contact", link: "#" },
];

export const SLIDES_DATA = [
  {
    img: alive,
    title: "Where Tinkerers Bring Ideas Alive",
    desc: "Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.",
  },
  {
    img: alive,
    title: "Build. Create. Innovate.",
    desc: "DIY electronics and kits to spark your creativity.",
  },
  {
    img: alive,
    title: "Gear Up for Your Next Project",
    desc: "From gaming accessories to pro tools, find everything here.",
  },
];

export const CATEGORY_DATA = [
  {
    name: "Sensors & Modules",
    image: sensor,
    bg: "bg-[#D5E8FF]",
  },
  {
    name: "Custom PC Parts",
    image: pcpart,
    bg: "bg-[#EEF4FB]",
  },
  {
    name: "DIY Tools",
    image: diytool,
    bg: "bg-[#E5E4E2]",
  },
  {
    name: "Cables & Connectors",
    image: cable,
    bg: "bg-[#EEF4FB]",
  },
  {
    name: "Gaming Peripherals",
    image: gaming,
    bg: "bg-[#E5E4E2]",
  },
  {
    name: "Raspberry Pi Kits",
    image: pitool,
    bg: "bg-[#D5E8FF]",
  },
];

export const PRODUCT_DATA = [
  {
    id: 1,
    title: "Vortex Gaming PC",
    description: "High performance gaming PC for ultimate experience.",
    price: 249.99,
    image: vortex,
  },
  {
    id: 2,
    title: "D-Link ADSL Router",
    description: "Reliable wireless router with fast connectivity.",
    price: 249.99,
    image: router,
  },
  {
    id: 3,
    title: "Gaming Chair",
    description: "Ergonomic chair for comfortable gaming sessions.",
    price: 249.99,
    image: chair,
  },
];


//  export const CART_PAGE = [
//     {
//       id: 1,
//       title: "Gaming Chair",
//       price: 249.99,
//       image: chair,
//       quantity: 1,
//     },
//     {
//       id: 2,
//       title: "Gaming Peripherals",
//       price: 449.99,
//       image: game,
//       quantity: 1,
//     },
//   ];
