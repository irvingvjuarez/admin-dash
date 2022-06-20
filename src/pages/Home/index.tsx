// data
import { DATA } from "../../data"

// components
import { FactCard } from "../../components/FactCard"
import { ChartLine } from "../../charts/Line"

const Home: React.FC = (): JSX.Element => {
  const { facts } = DATA

  return(
    <>
      <article className="lg:grid grid-cols-4 gap-3 mb-3">
        {facts.map(fact => (
          <FactCard key={fact.id} {...fact} />
        ))}
      </article>

      <section>
        <h2 className="text-xl mb-3 font-light tracking-wider">Key Performance Indicators</h2>
        <ChartLine title="Last Week Earnings" />
      </section>
    </>
  )
}

export { Home }