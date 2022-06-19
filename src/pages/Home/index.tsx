// data
import { DATA } from "../../data"

// components
import { FactCard } from "../../components/FactCard"

const Home: React.FC = (): JSX.Element => {
  const { facts } = DATA

  return(
    <>
      {facts.map(fact => (
        <FactCard key={fact.id} {...fact} />
      ))}
    </>
  )
}

export { Home }