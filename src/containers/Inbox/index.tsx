import { ChatForm } from "../../components/ChatForm"
import { ConsumerItem } from "../../components/ConsumerItem"

interface InboxProps {
  person: any
}

const Inbox: React.FC<InboxProps> = ({ person }) => {
  return(
    <>
      <div>
        {/* @ts-ignore */}
        <ConsumerItem {...person} type="inbox" />
      </div>

      <ChatForm />
    </>
  )
}

export { Inbox }