import { HiUsers } from "react-icons/hi"
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs"
import { TiWeatherStormy } from "react-icons/ti"
import { MdAttachMoney } from "react-icons/md"
import { IFact } from "./types"

export const DATA = {
  todayWeather: [
    {
      id: 0,
      hour: "12 AM",
      statusIcon: () => TiWeatherStormy,
      temp: "16"
    },
    {
      id: 1,
      hour: "1 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "23"
    },
    {
      id: 2,
      hour: "2 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "31"
    },
    {
      id: 3,
      hour: "3 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "23"
    },
    {
      id: 4,
      hour: "4 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "22"
    },
    {
      id: 5,
      hour: "5 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "18"
    },
    {
      id: 6,
      hour: "6 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "14"
    },
    {
      id: 7,
      hour: "7 pM",
      statusIcon: () => TiWeatherStormy,
      temp: "23"
    },
    {
      id: 8,
      hour: "8 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "19"
    },
    {
      id: 9,
      hour: "9 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "25"
    },
    {
      id: 10,
      hour: "10 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "11"
    },
    {
      id: 11,
      hour: "11 PM",
      statusIcon: () => TiWeatherStormy,
      temp: "16"
    },
    {
      id: 12,
      hour: "0 AM",
      statusIcon: () => TiWeatherStormy,
      temp: "16"
    }
  ],
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