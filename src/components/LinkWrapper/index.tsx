import { Link } from "react-router-dom"

interface LinkWrapperProps {
  children: JSX.Element
  url?: string
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({
  children,
  url
}): JSX.Element => {
  if(url) return <Link to={url}>
    {children}
  </Link>

  return <> {children} </>
}

export { LinkWrapper }