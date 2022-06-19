import { IoIosArrowForward } from "react-icons/io"
import { IconType } from "react-icons/lib"

import { Link } from "react-router-dom"

interface FactCardComponent {
  title: string
  figure: string
  icon: () => IconType
  color: string,
  url: string
}

const FactCard: React.FC<FactCardComponent> = ({ title, figure, icon, color, url }): JSX.Element => {
  const IconComponent = icon()

  return(
    <div className="flex justify-between items-center bg-primary-strong rounded-lg p-4 mb-3">
      <div className="h-full px-3">
        <IconComponent className={`${color} text-5xl`} />
      </div>

      <div className="px-2">
        <h3 className="text-xl text-bold tracking-wider">{title}</h3>
        <span className="font-extralight tracking-widest text-4xl">{figure}</span>
      </div>

      <Link to={url}>
        <IoIosArrowForward className="justify-end" />
      </Link>
    </div>
  )
}

export { FactCard }