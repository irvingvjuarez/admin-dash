import { IconType } from "react-icons"

export interface IFact {
  id: number
  title: string
  figure: string
  icon: () => IconType
  color: string
  url: string
}