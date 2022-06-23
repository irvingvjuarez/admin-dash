import { ForecastDayButtonContainer } from "./subcomponents/ForecastDayButtonContainer"
import { ForecastDayButtonTitle } from "./subcomponents/ForecastDayButtonTitle"

interface ForecastDayButtonProps {
  handleClick: () => void
  validationFn?: () => boolean
  text: string,
  isArrowButton?: boolean
}

const ForecastDayButton: React.FC<ForecastDayButtonProps> = ({ handleClick, validationFn, text, isArrowButton }): JSX.Element => {
  return (
    <ForecastDayButtonContainer validator={isArrowButton || false}>
      <ForecastDayButtonTitle
        handleClick={handleClick}
        validator={isArrowButton || false}
        validationFn={validationFn}
        text={text} />
    </ForecastDayButtonContainer>
  )
}

export { ForecastDayButton }