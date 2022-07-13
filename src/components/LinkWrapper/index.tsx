import { Link, useLocation } from "react-router-dom"

interface LinkWrapperProps {
  children: JSX.Element,
  params?: string,
  url?: string
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({
  children,
  params,
  url
}): JSX.Element => {
  if(params){
    const { pathname } = useLocation()
    return (
      <Link to={`${pathname}`}>
        {children}
      </Link>
    )
  }else if(url){
    return (
      <Link to={url}>
        {children}
      </Link>
    )
  }

  return <> {children} </>
}

export { LinkWrapper }