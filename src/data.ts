import { HiUsers } from "react-icons/hi"
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs"
import { MdAttachMoney } from "react-icons/md"
import { IFact } from "./types"

interface IData {
  facts: IFact[]
  lastWeekEarnings: unknown[]
  flavors: unknown[]
}

export const DATA: IData = {
  flavors: [
    {
      name: "Sun",
      chocolate: 30,
      lemon: 70
    },
    {
      name: "Mon",
      chocolate: 24,
      lemon: 76
    },
    {
      name: "Tue",
      chocolate: 82,
      lemon: 16
    },
    {
      name: "Wed",
      chocolate: 48,
      lemon: 52
    },
    {
      name: "Thu",
      chocolate: 76,
      lemon: 24
    },
    {
      name: "Fri",
      chocolate: 39,
      lemon: 61
    },
    {
      name: "Sat",
      chocolate: 50,
      lemon: 50
    }
  ],
  lastWeekEarnings: [
    {
      name: "Sun",
      tea: 500,
      iceCream: 700
    },
    {
      name: "Mon",
      tea: 240,
      iceCream: 897
    },
    {
      name: "Tue",
      tea: 827,
      iceCream: 1292
    },
    {
      name: "Wed",
      tea: 987,
      iceCream: 1392
    },
    {
      name: "Thu",
      tea: 762,
      iceCream: 822
    },
    {
      name: "Fri",
      tea: 392,
      iceCream: 692
    },
    {
      name: "Sat",
      tea: 938,
      iceCream: 500
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