import { HiUsers } from "react-icons/hi"
import { BsCartPlusFill } from "react-icons/bs"

export const DATA = {
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
    }
  ]
}