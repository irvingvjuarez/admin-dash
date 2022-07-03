import { OneDayForecast } from "../../components/OneDayForecast"
import { SectionContainer } from "../SectionContainer"

interface WeatherTempProps {
  weatherData: any
}

const WeatherTemp: React.FC<WeatherTempProps> = ({
  weatherData
}): JSX.Element => {
  return(
    <SectionContainer
      title="Temperature over next 24 hrs"
      sectionClassName="mb-9 flex items-center flex-col" >
      <article className="w-full pb-4 scrollbar overflow-x-auto relative">
        <OneDayForecast data={weatherData} />
      </article>
    </SectionContainer>
  )
}

export { WeatherTemp }