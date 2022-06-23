import { IoIosArrowForward } from "react-icons/io"
import { ForecastDayLink } from "./ForecastDayLink"

interface ForecastDayButtonTitleProps {
  handleClick: () => void
  validator: boolean
  text: string
  validationFn:  undefined | Function
  url?: string
}

const Dot: React.FC = (): JSX.Element => <i className="absolute left-1/2 top-1/2 text-2xl">·</i>

export const ForecastDayButtonTitle: React.FC<ForecastDayButtonTitleProps> = ({ handleClick, validator, text, validationFn, url }) => {
  return(
    <ForecastDayLink url={url}>
      <>
        <h2
          onClick={handleClick}
          className={`cursor-pointer ${!validator && "hover:-translate-y-1 relative mr-2"}`}>
          {text}
          {validationFn && (validationFn() && <Dot />)}
        </h2>

        {validator && <IoIosArrowForward />}
      </>
    </ForecastDayLink>
  )
}