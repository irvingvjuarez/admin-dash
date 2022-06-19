// data
import { DATA } from "../../data"

// components
import { FactCard } from "../../components/FactCard"

const Home: React.FC = (): JSX.Element => {
  const { facts } = DATA

  return(
    <article className="lg:grid grid-cols-4 gap-3">
      {facts.map(fact => (
        <FactCard key={fact.id} {...fact} />
      ))}
    </article>
  )
}

export { Home }