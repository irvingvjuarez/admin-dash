import { useState } from "react"

interface OneDayForecastProps {
  data: any[]
}

const OneDayForecast: React.FC<OneDayForecastProps> = ({ data }): JSX.Element => {
  return(
    <div className="flex space-x-3 w-fit mx-auto bg-primary">
      {data.map(item => {
        const Component = item.statusIcon()
        return(
          <div key={item.id} className={item.overlapping ? "overlapped-day-forecast" : "standard-day-forecast"}>
            <span className={`min-w-[50px] text-lg font-thin tracking-wide text-center`}>{item.hour}</span>
            <Component className="text-4xl my-4 text-contrast-clear" />
            <span className={`font-thin text-lg tracking-wide`}>{item.temp}°</span>
          </div>
        )
      })}
    </div>
  )
}

export { OneDayForecast }