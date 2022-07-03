import { useLocation } from "react-router-dom"
import { ConsumerItem } from "../../components/ConsumerItem"
import { SectionContainer } from "../../containers/SectionContainer"
import { DATA } from "../../data"

const Consumer = () => {
  const { pathname } = useLocation()
  const getNameFromPath = (path: string) => {
    const nameMatches = path.match(/[A-z\%0-9]+$/i) as RegExpMatchArray
    const match = nameMatches[0]
    return decodeURI(match)
  }
  const consumer = DATA.consumers.find(consumer => consumer.name === getNameFromPath(pathname))

  return(
    <SectionContainer title="" subpage={true} >
      <ConsumerItem {...consumer} type="inbox" />
    </SectionContainer>
  )
}

export { Consumer }