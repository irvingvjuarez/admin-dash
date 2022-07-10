import { ChatForm } from "../../components/ChatForm"
import { ConsumerItem } from "../../components/ConsumerItem"

interface InboxProps {
  person?: any
  containerClassName?: string
}

const Inbox: React.FC<InboxProps> = ({
  person,
  containerClassName
}) => {
  return(
    <section className={`border border-[transparent] ${containerClassName}`}>
      {person ? (
        <>
          <div>
            {/* @ts-ignore */}
            <ConsumerItem {...person} type="inbox" />
          </div>

          <ChatForm />
        </>
      ) : (
        <h2 className="w-full text-center text-lg mt-3 tracking-wider">Start a conversation</h2>
      )}
    </section>
  )
}

export { Inbox }