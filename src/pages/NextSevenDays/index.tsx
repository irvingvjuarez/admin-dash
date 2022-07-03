import { SectionContainer } from "../../containers/SectionContainer"
import { WeatherCard } from "../../components/WeatherCard"

const NextSevenDays: React.FC = (): JSX.Element => {
  return(
    <SectionContainer
      title="Weather Forecast in next 7 days"
      titleStrong={true}
      subpage={true} >
      <WeatherCard />
    </SectionContainer>
  )
}

export { NextSevenDays }