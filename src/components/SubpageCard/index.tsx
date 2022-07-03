import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"
import { IFact } from "../../types"
import { CardContainer } from "../CardContainer"

const SubpageCard: React.FC<IFact> = ({ title, figure, icon, color, url }): JSX.Element => {
  const IconComponent = icon()

  return(
    <CardContainer type="flex">
      <>
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
      </>
    </CardContainer>
  )
}

export { SubpageCard }