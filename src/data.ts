import { HiUsers } from "react-icons/hi"
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs"
import { MdAttachMoney } from "react-icons/md"
import { IFact } from "./types"

interface IData {
  facts: IFact[],
  lastWeekEarnings: unknown[]
}

export const DATA: IData = {
  lastWeekEarnings: [
    {
      name: "Sunday",
      tea: 500,
      iceCream: 700
    },
    {
      name: "Monday",
      tea: 240,
      iceCream: 697
    },
    {
      name: "Tuesday",
      tea: 827,
      iceCream: 392
    },
    {
      name: "Wednesday",
      tea: 987,
      iceCream: 392
    },
    {
      name: "Thursday",
      tea: 762,
      iceCream: 822
    },
    {
      name: "Friday",
      tea: 392,
      iceCream: 1292
    },
    {
      name: "Saturday",
      tea: 938,
      iceCream: 900
    }
  ],
  facts: [
    {
      id: 0,
      title: "Total Users",
      figure: "2,019",
      icon: () => HiUsers,
      color: "text-contrast-clear",
      url: "users"
    },
    {
      id: 1,
      title: "New Orders",
      figure: "15,219",
      icon: () => BsCartPlusFill,
      color: "text-contrast2-clear",
      url: "orders"
    },
    {
      id: 2,
      title: "Last Week Earnings",
      figure: "102,342",
      icon: () => MdAttachMoney,
      color: "text-contrast3-clear",
      url: "sells/latest"
    },
    {
      id: 3,
      title: "Delivered Products",
      figure: "2,416",
      icon: () => BsFillCartCheckFill,
      color: "text-contrast4-clear",
      url: "deliveries/latests"
    }
  ]
}