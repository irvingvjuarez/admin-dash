interface ForecastDayButtonContainerProps {
  validator: boolean
  children: JSX.Element
}

export const ForecastDayButtonContainer: React.FC<ForecastDayButtonContainerProps> = ({ validator, children }) => {
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