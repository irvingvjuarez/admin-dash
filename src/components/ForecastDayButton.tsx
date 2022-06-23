interface ForecastDayButtonProps {
  handleClick: () => void
  validationFn: () => boolean
  text: string
}

const Dot: React.FC = (): JSX.Element => <i className="absolute left-1/2 top-1/2 text-2xl">·</i>

const ForecastDayButton: React.FC<ForecastDayButtonProps> = ({ handleClick, validationFn, text }): JSX.Element => {
  return(
    <h2 onClick={handleClick} className="cursor-pointer hover:-translate-y-1 relative mr-2">
      {text} {validationFn() && <Dot />}
    </h2>
  )
}

export { ForecastDayButton }