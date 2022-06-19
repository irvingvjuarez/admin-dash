// Icons
import { IoIosArrowForward } from "react-icons/io"
// Third Party Components
import { Link } from "react-router-dom"
// interfaces
import { IFact } from "../types"

const FactCard: React.FC<IFact> = ({ title, figure, icon, color, url }): JSX.Element => {
  const IconComponent = icon()

  return(
    <div className="flex justify-between items-center bg-primary-strong rounded-lg p-4 mb-3 lg:mb-0">
      <div className="flex items-center">
        <div className="h-full px-1">
          <IconComponent className={`${color} text-2xl`} />
        </div>

        <div className="px-1">
          <h3 className="text-md text-bold tracking-wider">{title}</h3>
          <span className="font-extralight tracking-widest text-xl">{figure}</span>
        </div>
      </div>

      <Link to={url}>
        <IoIosArrowForward className="justify-end" />
      </Link>
    </div>
  )
}

export { FactCard }