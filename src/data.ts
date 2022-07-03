import { HiUsers } from "react-icons/hi"
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs"
import { TiWeatherStormy, TiWeatherShower, TiWeatherPartlySunny, TiWeatherWindyCloudy, TiWeatherSunny } from "react-icons/ti"
import { MdAttachMoney } from "react-icons/md"

export const DATA = {
  consumers: [
    {
      name: "Adolf Hitler",
      status: "Pending",
      message: "Some non-sense text telling me something I don't want to actually listen to...",
      color: "bg-contrast"
    },
    {
      name: "Batman Wayne",
      status: "Done",
      message: "Some non-sense text telling me something I don't want to actually listen to...",
      color: "bg-contrast2"
    },
    {
      name: "Pato Pascual",
      status: "Broken",
      message: "Some non-sense text telling me something I don't want to actually listen to...",
      color: "bg-contrast3"
    },
    {
      name: "John Doe",
      status: "Done",
      message: "Some non-sense text telling me something I don't want to actually listen to...",
      color: "bg-contrast4"
    }
  ],
  nextSevenDays: [
    {
      id: 0,
      day: "Monday",
      temp: {
        max: "34",
        min: "24"
      },
      icon: () => TiWeatherSunny,
      rain: "32"
    },
    {
      id: 1,
      day: "Tuesday",
      temp: {
        max: "23",
        min: "12"
      },
      icon: () => TiWeatherPartlySunny,
      rain: "21"
    },
    {
      id: 2,
      day: "Wednesday",
      temp: {
        max: "27",
        min: "21"
      },
      icon: () => TiWeatherWindyCloudy,
      rain: "12"
    },
    {
      id: 3,
      day: "Thursday",
      temp: {
        max: "29",
        min: "14"
      },
      icon: () => TiWeatherSunny,
      rain: "98"
    },
    {
      id: 4,
      day: "Friday",
      temp: {
        max: "25",
        min: "12"
      },
      icon: () => TiWeatherStormy,
      rain: "43"
    },
    {
      id: 5,
      day: "Saturday",
      temp: {
        max: "12",
        min: "10"
      },
      icon: () => TiWeatherShower,
      rain: "15"
    },
    {
      id: 6,
      day: "Sunday",
      temp: {
        max: "27",
        min: "20"
      },
      icon: () => TiWeatherSunny,
      rain: "52"
    }
  ],
  topProductSales: {
    data: [
      { name: "MacBook Pro", value: 400 },
      { name: "iPhone", value: 300 },
      { name: "iPad", value: 300 },
      { name: "MacBook Air", value: 200 }
    ],
    colors: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
  },
  chanceOfRain: [
    {
      id: 0,
      name: "12 AM",
      rain: 40,
      overlapping: false
    },
    {
      id: 1,
      name: "1 AM",
      rain: 36,
      overlapping: false
    },
    {
      id: 2,
      name: "2 AM",
      rain: 22,
      overlapping: true
    },
    {
      id: 3,
      name: "3 AM",
      rain: 27,
      overlapping: false
    },
    {
      id: 4,
      name: "4 AM",
      rain: 18,
      overlapping: false
    },
    {
      id: 5,
      name: "5 AM",
      rain: 23,
      overlapping: false
    },
    {
      id: 6,
      name: "6 AM",
      rain: 34,
      overlapping: false
    }
  ],
  tomorrowWeather: {
    city: "Mexico City",
    current_temp: "20",
    forecast_temp: [
      {
        id: 0,
        hour: "1 AM",
        statusIcon: () => TiWeatherWindyCloudy,
        temp: "16",
        overlapping: false,
      },
      {
        id: 1,
        hour: "2 AM",
        statusIcon: () => TiWeatherStormy,
        temp: "23",
        overlapping: false,
      },
      {
        id: 2,
        hour: "3 AM",
        statusIcon: () => TiWeatherShower,
        temp: "31",
        overlapping: false,
      },
      {
        id: 3,
        hour: "4 AM",
        statusIcon: () => TiWeatherPartlySunny,
        temp: "23",
        overlapping: false,
      },
      {
        id: 4,
        hour: "5 AM",
        statusIcon: () => TiWeatherSunny,
        temp: "22",
        overlapping: false,
      },
      {
        id: 5,
        hour: "6 AM",
        statusIcon: () => TiWeatherPartlySunny,
        temp: "18",
        overlapping: false,
      },
      {
        id: 6,
        hour: "7 AM",
        statusIcon: () => TiWeatherStormy,
        temp: "14",
        overlapping: false,
      },
      {
        id: 7,
        hour: "8 AM",
        statusIcon: () => TiWeatherWindyCloudy,
        temp: "23",
        overlapping: false,
      },
      {
        id: 8,
        hour: "9 AM",
        statusIcon: () => TiWeatherShower,
        temp: "19",
        overlapping: false,
      },
      {
        id: 9,
        hour: "10 AM",
        statusIcon: () => TiWeatherSunny,
        temp: "25",
        overlapping: false,
      },
      {
        id: 10,
        hour: "11 AM",
        statusIcon: () => TiWeatherSunny,
        temp: "11",
        overlapping: false,
      },
      {
        id: 11,
        hour: "12 AM",
        statusIcon: () => TiWeatherWindyCloudy,
        temp: "16",
        overlapping: false,
      },
      {
        id: 12,
        hour: "1 PM",
        statusIcon: () => TiWeatherPartlySunny,
        temp: "16",
        overlapping: false,
      }
    ]
  },
  todayWeather: {
    city: "Mexico City",
    current_temp: "12",
    forecast_temp: [
      {
        id: 0,
        hour: "12 AM",
        statusIcon: () => TiWeatherWindyCloudy,
        temp: "16",
        overlapping: false,
      },
      {
        id: 1,
        hour: "1 PM",
        statusIcon: () => TiWeatherStormy,
        temp: "23",
        overlapping: false,
      },
      {
        id: 2,
        hour: "2 PM",
        statusIcon: () => TiWeatherShower,
        temp: "31",
        overlapping: true,
      },
      {
        id: 3,
        hour: "3 PM",
        statusIcon: () => TiWeatherStormy,
        temp: "23",
        overlapping: false,
      },
      {
        id: 4,
        hour: "4 PM",
        statusIcon: () => TiWeatherPartlySunny,
        temp: "22",
        overlapping: false,
      },
      {
        id: 5,
        hour: "5 PM",
        statusIcon: () => TiWeatherStormy,
        temp: "18",
        overlapping: false,
      },
      {
        id: 6,
        hour: "6 PM",
        statusIcon: () => TiWeatherSunny,
        temp: "14",
        overlapping: false,
      },
      {
        id: 7,
        hour: "7 pM",
        statusIcon: () => TiWeatherStormy,
        temp: "23",
        overlapping: false,
      },
      {
        id: 8,
        hour: "8 PM",
        statusIcon: () => TiWeatherStormy,
        temp: "19",
        overlapping: false,
      },
      {
        id: 9,
        hour: "9 PM",
        statusIcon: () => TiWeatherWindyCloudy,
        temp: "25",
        overlapping: false,
      },
      {
        id: 10,
        hour: "10 PM",
        statusIcon: () => TiWeatherStormy,
        temp: "11",
        overlapping: false,
      },
      {
        id: 11,
        hour: "11 PM",
        statusIcon: () => TiWeatherStormy,
        temp: "16",
        overlapping: false,
      },
      {
        id: 12,
        hour: "0 AM",
        statusIcon: () => TiWeatherSunny,
        temp: "16",
        overlapping: false,
      }
    ]
  },
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