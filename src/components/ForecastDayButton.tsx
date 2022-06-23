import { IoIosArrowForward } from "react-icons/io"

interface ForecastDayButtonProps {
  handleClick: () => void
  validationFn?: () => boolean
  text: string,
  isArrowButton?: boolean
}

const Dot: React.FC = (): JSX.Element => <i className="absolute left-1/2 top-1/2 text-2xl">·</i>

interface ForecastDayButtonContainerProps {
  validator: boolean
  children: JSX.Element
}

const ForecastDayButtonContainer: React.FC<ForecastDayButtonContainerProps> = ({ validator, children }) => {
  return(
    <>
      {validator ? (
        <div className="flex items-center text-contrast-clear text-lg font-medium">
          {children}
        </div>
      ) : (
        <> {children} </>
      )}
    </>
  )
}

const ForecastDayButton: React.FC<ForecastDayButtonProps> = ({ handleClick, validationFn, text, isArrowButton }): JSX.Element => {
  return (
    <ForecastDayButtonContainer validator={isArrowButton || false}>
      <>
        <h2
          onClick={handleClick}
          className={`cursor-pointer ${!isArrowButton && "hover:-translate-y-1 relative mr-2"}`}>
          {text}
          {validationFn && (validationFn() && <Dot />)}
        </h2>

        {isArrowButton && <IoIosArrowForward />}
      </>
    </ForecastDayButtonContainer>
  )
}

export { ForecastDayButton }