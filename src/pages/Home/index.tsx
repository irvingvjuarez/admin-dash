// data
import { DATA } from "../../data"

// components
import { SectionContainer } from "../../containers/SectionContainer"
import { SubpageCard } from "../../components/SubpageCard"
import { ChartArea } from "../../charts/ChartArea"
import { ChartStackedBar } from "../../charts/ChartStackedBar"
import { ChartPie } from "../../charts/ChartPie"

const Home: React.FC = (): JSX.Element => {
  const { facts } = DATA

  return(
    <>
      <article className="lg:grid grid-cols-4 gap-3 mb-3">
        {facts.map(fact => (
          <SubpageCard key={fact.id} {...fact} />
        ))}
      </article>

      <SectionContainer title="Key Performance Indicators">
        <>
          <ChartArea title="Last Week Earnings" />
          <article className="double-chart-grid">
            <ChartStackedBar />
            <ChartPie />
          </article>
        </>
      </SectionContainer>
    </>
  )
}

export { Home }