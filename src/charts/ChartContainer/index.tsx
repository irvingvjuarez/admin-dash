import { ChartContainerConfig } from "./types"
import { getArticleClass, getTitleClass, getWrapperClass } from "./utils"

interface ChartContainerProps {
  config: ChartContainerConfig
  children: JSX.Element
}

const ChartContainer: React.FC<ChartContainerProps> = ({ config, children }): JSX.Element => {
  const { title } = config

  return(
    <section className={getWrapperClass(config)}>
      <h2 className={getTitleClass(config)}>
        {title}
      </h2>

      <article className={getArticleClass(config)}>
        {children}
      </article>
    </section>
  )
}

export { ChartContainer }