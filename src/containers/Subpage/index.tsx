import { useNavigate } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"

interface SubpageProps {
  isSubpage: boolean
  children: JSX.Element
}

const Subpage: React.FC<SubpageProps> = ({ isSubpage, children }): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1)

  if(isSubpage) return(
    <div className="flex items-center mb-3">
      <button onClick={handleClick}>
        <BiArrowBack className="mr-2 text-xl" />
      </button>

      {children}
    </div>
  )
  
  return <> {children} </>
}

export { Subpage }