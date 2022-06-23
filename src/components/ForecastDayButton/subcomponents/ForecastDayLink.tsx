import { Link } from "react-router-dom"

interface ForecastDayLinkProps {
  url: string | undefined
  children: JSX.Element
}

export const ForecastDayLink: React.FC<ForecastDayLinkProps> = ({ url, children }) => {
  return(
    <>
      {url ? (
        <Link to={url} className="flex items-center">
          {children}
        </Link>
      ) : (
        <> {children} </>
      )}
    </>
  )
}